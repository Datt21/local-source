import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListSettingPaymentComponent } from './components/list-setting-payment/list-setting-payment.component';

const routes: Routes = [
  {
    path: '',
    component: ListSettingPaymentComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingPaymentRoutingModule { }
