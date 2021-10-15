import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { NewOrEditCustomerComponent } from './components/new-or-edit-customer/new-or-edit-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { SharedModule } from '@shared/shared.module';
import { AppTranslationModule } from '@app/app.translation.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonMasterTableModule } from '@shared/components/button-master-table/button-master-table.module';


@NgModule({
  declarations: [NewOrEditCustomerComponent, ListCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    AppTranslationModule,
    NgSelectModule,
    ButtonMasterTableModule
  ],
  providers: []
})
export class CustomerModule { }
