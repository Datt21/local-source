import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingAccountRoutingModule } from './setting-account-routing.module';
import { ListSettingAccountComponent } from './components/list-setting-account/list-setting-account.component';
import { SettingAccountService } from './services/setting-account.service';
import { SharedModule } from 'src/shared/shared.module';
import { AppTranslationModule } from 'src/app/app.translation.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NewOrEditSettingAccountComponent } from './components/new-or-edit-setting-account/new-or-edit-setting-account.component';
import { ButtonMasterTableModule } from '@shared/components/button-master-table/button-master-table.module';
import { ViewDetailAccountComponent } from './components/view-detail-account/view-detail-account.component';

@NgModule({
  declarations: [ListSettingAccountComponent, NewOrEditSettingAccountComponent, ViewDetailAccountComponent],

  imports: [
    CommonModule,
    SettingAccountRoutingModule,
    SharedModule,
    AppTranslationModule,
    NgSelectModule,
    ButtonMasterTableModule
  ],
  providers: [
    SettingAccountService
  ]
})
export class SettingAccountModule { }
