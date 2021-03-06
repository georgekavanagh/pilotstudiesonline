import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardCheckoutComponent } from './dashboard-checkout/dashboard-checkout.component';
import { DashboardExamComponent } from './dashboard-exam/dashboard-exam.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardPaymentComponent } from './dashboard-payment/dashboard-payment.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardShopComponent } from './dashboard-shop/dashboard-shop.component';

const DashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardIndexComponent
  },
  {
    path: 'shop',
    component: DashboardShopComponent
  },
  {
    path: 'profile',
    component: DashboardProfileComponent
  },
  {
    path: 'orders',
    component: DashboardOrderComponent
  },
  {
    path: 'exams',
    component: DashboardExamComponent
  },
  {
    path: 'checkout',
    component: DashboardCheckoutComponent
  },
  {
    path: 'payment/:orderId',
    component: DashboardPaymentComponent
  },
  {
    path: 'admin',
    component: DashboardAdminComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: DashboardChildrenRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
