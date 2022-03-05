import { Component } from "@angular/core";
import { CompleteOrder } from "src/app/models/complete-order.model";
import { MockExam } from "src/app/models/mock-exam.model";
import { Pagination } from "src/app/models/pagination.model";
import { User } from "src/app/models/user.model";
import { DashboardOrderService } from "../dashboard-order/shared/dashboard-order.service";
import * as _ from "underscore"; 
import * as moment from "moment"
import { AuthService } from "src/app/auth/shared/auth.service";

@Component({
    selector: 'll-dashboard-admin',
    templateUrl: './dashboard-admin.component.html',
    styleUrls: ['./dashboard-admin.component.scss']
  })
  export class DashboardAdminComponent {
    ordersReadyForCompletion:any[] = [];
    completedOrders:any[] = [];
    loadingOrders:boolean = false;
    completingOrder:boolean = false;
    totalRecords:number = 0;
    totalCompletedRecords:number = 0;
    btnOptions:any[] = []
    currentUser:User;
    rows:number = 10;
    first:number = 0

    constructor(private dashboardOrderService:DashboardOrderService,
      private authService:AuthService){

    }

    getOrdersReadyForCompletion(event){
      this.rows = event.rows;
      this.first = event.first;
      this.loadingOrders = true;
      let uriString = `?pageSize=${event.rows}&pageIndex=${event.first}`
      this.dashboardOrderService.getOrdersReadyForCompletion(uriString).subscribe((paginationObj:Pagination)=>{
        this.ordersReadyForCompletion = paginationObj.data;
        this.loadingOrders = false;
        this.totalRecords = paginationObj.count;
      })
    }

    getCompletedOrders(event){
      let uriString = `?pageSize=${event.rows}&pageIndex=${event.first}`
      this.dashboardOrderService.getCompletedOrders(uriString).subscribe((paginationObj:Pagination)=>{
        this.completedOrders = paginationObj.data;
        this.totalCompletedRecords = paginationObj.count;
      })
    }

    getStatusName(status){
      switch (status){
        case 0:
          return 'Pending';
        case 1:
          return 'Payment Received';
        case 2:
          return 'Complete';
        case 3:
          return 'Cancelled'
      }
    }

    initBtnOptions(order){
      this.btnOptions = [];
      if(order.status === 1){
        this.btnOptions.push({label: 'Complete Order', icon: 'pi pi-check-circle', command: () => {
          this.getUserForOrder(order);
        }})
      }
      if(this.btnOptions.length === 0){
        this.btnOptions.push({label: 'No actions available', icon: 'pi pi pi-ban'})
      }
    }

    getUserForOrder(order){
      this.completingOrder = true;
      this.authService.getUserByEmail(order.buyerEmail).subscribe(user=>{
         this.completeOrder(order,user);
      })
    }


    completeOrder(order,user){
      let currentUser = user;

      let completedOrderObjList = [];
      let currentDate = new Date();

      _.each(order.orderItems,(item)=>{
        let expiry:Date = this.getExpiryDate(item);
        let mockExamObj: MockExam = {
          id: undefined,
          userId: currentUser.id,
          name: item.itemOrdered.productName,
          image: item.itemOrdered.image,
          category: "PPL",
          expiry: expiry,
          activationDate: currentDate,
          activated: true
        }
        let completedOrderObj:CompleteOrder = {
          id: order.id,
          email: order.buyerEmail,
          mockExam: mockExamObj
        }
        completedOrderObjList.push(completedOrderObj);
      })

      if(completedOrderObjList.length > 0){
        setTimeout(()=>{
          this.dashboardOrderService.completeOrder(completedOrderObjList).subscribe(res=>{
            this.completingOrder = false;
            let event = {rows:this.rows,first:this.first};
            this.getOrdersReadyForCompletion(event);
            console.log(res,'res')
          },error=>{
            this.completingOrder = false;
            console.log(error,'error')
          })
        },2000)
      }else{
        this.completingOrder = false;
      }
    }

    getExpiryDate(mockExam):Date{
      switch (mockExam.itemOrdered.productType){
        case 'Mock-Exam':
          return moment().add(1,'M').toDate();
        case 'Course':
          return moment().add(1,'M').toDate();
        case 'Bundle':
          return moment().add(3,'M').toDate();
        default:
          return moment().add(1,'M').toDate();
      }
    }
  }