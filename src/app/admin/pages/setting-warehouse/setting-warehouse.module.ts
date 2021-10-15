import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingWarehouseRoutingModule } from './setting-warehouse-routing.module';
import { ListSettingWarehouseComponent } from './components/list-setting-warehouse/list-setting-warehouse.component';
import { NewOrEditSettingWarehouseComponent } from './components/new-or-edit-setting-warehouse/new-or-edit-setting-warehouse.component';
import { SharedModule } from '@shared/shared.module';
import { AppTranslationModule } from '@app/app.translation.module';
import { ButtonMasterTableModule } from '@shared/components/button-master-table/button-master-table.module';
import { SettingWarehouseService } from './services/setting-warehouse.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewDetailWarehouseComponent } from './components/view-detail-warehouse/view-detail-warehouse.component';

@NgModule({
  declarations: [
    ListSettingWarehouseComponent,
    NewOrEditSettingWarehouseComponent,
    ViewDetailWarehouseComponent,
  ],
  imports: [
    CommonModule,
    SettingWarehouseRoutingModule,
    SharedModule,
    AppTranslationModule,
    ButtonMasterTableModule,
    NgSelectModule,
  ],
  providers: [SettingWarehouseService],
})
export class SettingWarehouseModule {}
