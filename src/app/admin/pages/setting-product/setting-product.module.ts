import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingProductRoutingModule } from './setting-product-routing.module';
import { ListSettingProductComponent } from './components/list-setting-product/list-setting-product.component';
import { NewOrEditSettingProductComponent } from './components/new-or-edit-setting-product/new-or-edit-setting-product.component';
import { SharedModule } from '@shared/shared.module';
import { AppTranslationModule } from '@app/app.translation.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonMasterTableModule } from '@shared/components/button-master-table/button-master-table.module';


@NgModule({
  declarations: [ListSettingProductComponent, NewOrEditSettingProductComponent],
  imports: [
    CommonModule,
    SettingProductRoutingModule,
    SharedModule,
    AppTranslationModule,
    AppTranslationModule,
    ButtonMasterTableModule,
    NgSelectModule
  ],
  providers: []
})
export class SettingProductModule { }
