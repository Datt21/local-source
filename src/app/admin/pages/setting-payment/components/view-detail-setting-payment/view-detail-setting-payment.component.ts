import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseDetailComponent } from '@shared/components/base-page/base-detail.component';
import { LoaderService } from '@shared/services/loader.service';
import { Utilities } from 'src/shared/services/utilities.service';
import { PaymentModel } from '../../models/setting-payment.model';
@Component({
  selector: 'app-view-detail-setting-payment',
  templateUrl: './view-detail-setting-payment.component.html',
  styleUrls: ['./view-detail-setting-payment.component.scss']
})
  export class ViewDetailSettingPaymentComponent extends BaseDetailComponent<PaymentModel>{
    form = this.formBuilder.group({
      customerCode: [''],
      warehouseCode: [''],
      isRepresentative:[''],
      customerName: [''],
      warehouseName: ['']
    });
    
    constructor(
      common: Utilities,
      translate: TranslateService,
      private formBuilder: FormBuilder,
      private loader: LoaderService
    ) {
      super(common, translate, PaymentModel);
    }
    /**
     * Load data before show modal
     */
    async initBeforeShow(model: PaymentModel) {
      this.loader.show();
      this.form.reset();
      this.form.setValue({
        customerCode: model?.customerCode,
        warehouseCode: model?.warehouseCode,
        customerName: model?.customerName,
        warehouseName: model?.warehouseName,
        isRepresentative:model?.isRepresentative
      });
      this.loader.hide();
    }
  }