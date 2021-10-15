import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingPaymentRoutingModule } from './setting-payment-routing.module';
import { ListSettingPaymentComponent } from './components/list-setting-payment/list-setting-payment.component';
import { NewOrEditSettingPaymentComponent } from './components/new-or-edit-setting-payment/new-or-edit-setting-payment.component';
import { SharedModule } from '@shared/shared.module';
import { AppTranslationModule } from '@app/app.translation.module';
import { ButtonMasterTableModule } from '@shared/components/button-master-table/button-master-table.module';
import { SettingPaymentService } from './services/setting-payment.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { SettingWarehouseModule } from '../setting-warehouse/setting-warehouse.module';
import { ViewDetailSettingPaymentComponent } from './components/view-detail-setting-payment/view-detail-setting-payment.component';
@NgModule({
  declarations: [ListSettingPaymentComponent, NewOrEditSettingPaymentComponent, ViewDetailSettingPaymentComponent],
  imports: [
    CommonModule,
    SettingPaymentRoutingModule,
    SharedModule,
    AppTranslationModule,
    ButtonMasterTableModule,
    NgSelectModule,
    SettingWarehouseModule
  ],
  providers: [SettingPaymentService]
})
export class SettingPaymentModule { }
