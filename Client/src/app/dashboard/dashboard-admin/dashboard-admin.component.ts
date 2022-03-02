import { Component } from "@angular/core";

@Component({
    selector: 'll-dashboard-admin',
    templateUrl: './dashboard-admin.component.html',
    styleUrls: ['./dashboard-admin.component.scss']
  })
  export class DashboardAdminComponent {
    ordersReadyForCompletion:any[] = [];
    loadingOrders:boolean = false;
    totalRecords:number = 0;

    constructor(){

    }

    getOrdersReadyForCompletion(event){

    }
  }