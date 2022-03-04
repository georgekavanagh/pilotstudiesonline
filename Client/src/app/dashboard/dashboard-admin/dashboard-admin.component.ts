import { Component } from "@angular/core";
import { Pagination } from "src/app/models/pagination.model";
import { DashboardOrderService } from "../dashboard-order/shared/dashboard-order.service";

@Component({
    selector: 'll-dashboard-admin',
    templateUrl: './dashboard-admin.component.html',
    styleUrls: ['./dashboard-admin.component.scss']
  })
  export class DashboardAdminComponent {
    ordersReadyForCompletion:any[] = [];
    loadingOrders:boolean = false;
    totalRecords:number = 0;
    btnOptions:any[] = []

    constructor(private dashboardOrderService:DashboardOrderService){

    }

    getOrdersReadyForCompletion(event){
      this.loadingOrders = true;
      let uriString = `?pageSize=${event.rows}&pageIndex=${event.first}`
      this.dashboardOrderService.getOrdersReadyForCompletion(uriString).subscribe((paginationObj:Pagination)=>{
        this.ordersReadyForCompletion = paginationObj.data;
        this.loadingOrders = false;
        this.totalRecords = paginationObj.count;
      })

    }

    getStatusName(status){
      switch (status){
        case 0:
          return 'Pending';
        case 1:
          return 'Payment Received';
        case 2:
          return 'Payment Failed';
        case 3:
          return 'Cancelled'
      }
    }

    initBtnOptions(order){
      this.btnOptions = [];
      if(order.status === 1){
        this.btnOptions.push({label: 'Complete Order', icon: 'pi pi-check-circle', command: () => {
        
        }})
      }
      if(this.btnOptions.length === 0){
        this.btnOptions.push({label: 'No actions available', icon: 'pi pi pi-ban'})
      }
    }
  }