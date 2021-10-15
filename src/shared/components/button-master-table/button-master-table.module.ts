import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonMasterTableComponent } from './button-master-table.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AppTranslationModule } from '@app/app.translation.module';
import { jaLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
defineLocale('ja', jaLocale);

@NgModule({
  imports: [
    CommonModule,
    NgbTooltipModule,
    AppTranslationModule
  ],
  declarations: [ButtonMasterTableComponent],
  exports: [ButtonMasterTableComponent],
  providers: []
})
export class ButtonMasterTableModule { }
