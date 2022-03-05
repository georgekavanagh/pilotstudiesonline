import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardShopComponent } from './dashboard-shop/dashboard-shop.component';
import { DashboardCheckoutComponent } from './dashboard-checkout/dashboard-checkout.component';
import { DashboardPaymentComponent } from './dashboard-payment/dashboard-payment.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardExamComponent } from './dashboard-exam/dashboard-exam.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardIndexComponent,
    DashboardProfileComponent,
    DashboardOrderComponent,
    DashboardExamComponent,
    DashboardShopComponent,
    DashboardCheckoutComponent,
    DashboardPaymentComponent,
    DashboardAdminComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatMenuModule]
})
export class DashboardModule {}
