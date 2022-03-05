import { Component, OnInit } from '@angular/core';
import { DashboardOrderService } from './shared/dashboard-order.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'll-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orders = [];
  loadingOrders:boolean = false;
  cancellingOrder:boolean = false;
  btnOptions:any[] = [];

  constructor(private dashboardOrderService:DashboardOrderService,
      private router:Router) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.loadingOrders = true;
    setTimeout(()=>{
      this.dashboardOrderService.getUserOrders().subscribe((orders:any[])=>{
        this.loadingOrders = false;
        this.orders = _.sortBy(orders,'id').reverse();
      },error=>{
        this.loadingOrders = false;
        this.orders = [];
      })
    },2000)
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
    if(order.status === 0){
      this.btnOptions.push({label: 'Cancel Order', icon: 'pi pi-trash', command: () => {
        this.confirmCancel(order);
      }})
    }
    if(order.status === 0){
      this.btnOptions.push({label: 'Proceed to payment', icon: 'pi pi-money-bill', command: () => {
        this.router.navigate(["/dashboard/payment", order.id]);
      }})
    }
    if(this.btnOptions.length === 0){
      this.btnOptions.push({label: 'No actions available', icon: 'pi pi-ban'})
    }
  }

  confirmCancel(order){
    Swal.fire({
      title: 'Are you sure you want to cancel the selected order?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#2f7081',
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'Back'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cancelOrder(order)
      }
    })
  }

  cancelOrder(order){
    this.cancellingOrder = true;
    setTimeout(()=>{
      this.dashboardOrderService.cancelOrder({id:order.id}).subscribe(res=>{
        this.cancellingOrder = false;
        this.getOrders();
      },error=>{
        this.cancellingOrder = false;
        Swal.fire(
          'Error',
          (error.message)?error.message:'There was a problem cancelling your order, please try again.',
          'error'
        )
      })
    },2000)
  }
}
