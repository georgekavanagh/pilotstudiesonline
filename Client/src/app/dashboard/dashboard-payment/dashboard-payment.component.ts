import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "src/app/models/user.model";
import { environment } from "src/environments/environment";
import { DashboardOrderService } from "../dashboard-order/shared/dashboard-order.service";
import { DashboardPaymentService } from "./shared/dashboard-payment.service";
import * as md5 from "../../../../node_modules/md5";
import Swal from 'sweetalert2'

declare const window: any;

@Component({
    selector: 'app-dashboard-payment',
    templateUrl: './dashboard-payment.component.html',
    styleUrls: ['./dashboard-payment.component.scss']
  })
  export class DashboardPaymentComponent implements OnInit {
    orderId:number;
    order:any;
    params:URLSearchParams;
    user:User;
    isPaymentComplete:boolean = false;
    paymentLoading:boolean = false;
    finalisingPayment:boolean = false;
    merchantID = environment.MERCHANT_ID;
    merchantKey = environment.MERCHANT_KEY;
    passPhrase = environment.PASS_PHRASE;
    uuid:string;
    MD5Signature:any;
    
    constructor(private activatedRoute: ActivatedRoute,
        private dashboardOrderService:DashboardOrderService,
        private paymentService: DashboardPaymentService){
        this.orderId = +this.activatedRoute.snapshot.paramMap.get('orderId');
        this.user = JSON.parse(window.localStorage.getItem('profile'));
        console.log(this.orderId,'this.orderId')
    }

    ngOnInit(): void {
        this.getOrder(); 
    }

    getOrder(){
        this.dashboardOrderService.getUserOrderById(this.orderId).subscribe(res=>{
            this.order = res;
            this.initParams();
        })
    }

    initParams(){
        this.params = new URLSearchParams({
            merchant_id: this.merchantID,
            merchant_key: this.merchantKey,
            name_first: this.user.firstName,
            name_last:this.user.lastName,
            email_address: this.user.email,
            m_payment_id: this.user.id.toString(),
            amount: "5",
            item_name: `Order#${this.order.id}`,
            passphrase: this.passPhrase
          });
          this.MD5Signature = md5(this.params.toString());
    }

    getParamString(data){
        let pfParamString = "";
        for (let key in data) {
            if(data.hasOwnProperty(key)){pfParamString +=`${key}=${encodeURIComponent(data[key].trim()).replace(/%20/g, "+")}&`;}
        }
        // Remove last ampersand
        return pfParamString.slice(0, -1);
    }

    initPaymentProcess(){
        this.paymentLoading = true;
        let paymentPbj = {
            "merchant_id": this.merchantID,
            "merchant_key": this.merchantKey,
            "name_first": this.user.firstName,
            "name_last":this.user.lastName,
            "email_address": this.user.email,
            "m_payment_id": this.user.id,
            "amount": "5",
            "item_name": `Order#${this.order.id}`,
            "passphrase": this.passPhrase,
            "signature": this.MD5Signature
          }

        const pfParamString = this.getParamString(paymentPbj);
        
        this.paymentService.getUniqueIdentifyer(pfParamString).subscribe((res:any)=>{
            if(res){
                this.uuid = res;
                this.showPaymentPopUp();
            }
            this.paymentLoading = false;
        },error=>{
            this.paymentLoading = false;
            Swal.fire(
                'Error',
                'There was a problem contacting payfast for payment, please try again.',
                'error'
              )
        })
    }

    showPaymentPopUp(){
        window.payfast_do_onsite_payment(this.uuid, function (result) {
            if (result === true) {
              this.finalisingPayment = true;
              setTimeout(()=>{
                this.dashboardOrderService.orderPaymentReceived(this.orderId).subscribe(res=>{
                    this.finalisingPayment = false;
                    this.isPaymentComplete = true;
                },error=>{
                    this.finalisingPayment = false;
                    this.isPaymentComplete = false;
                    Swal.fire(
                        'Error',
                        'Payment has been received but the order failed to be updated, please contact us with the order number in order to update the order correctly.',
                        'error'
                      )
                })

              },2000)
            }
            else {
                console.log('pop up closed')
            }
          }); 
    }
  }