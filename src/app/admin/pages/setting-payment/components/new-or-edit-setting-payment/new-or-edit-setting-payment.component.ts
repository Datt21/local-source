import { Component, OnInit } from '@angular/core';
import { BaseNeworeditComponent } from '@shared/components/base-page/base-new-or-edit.component';
import { Utilities } from '@shared/services/utilities.service';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentModel } from '../../models/setting-payment.model';
import { SettingPaymentService } from '../../services/setting-payment.service';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { ConfirmationService } from '@shared/services/confirmation.service';
@Component({
  selector: 'app-new-or-edit-setting-payment',
  templateUrl: './new-or-edit-setting-payment.component.html',
  styleUrls: ['./new-or-edit-setting-payment.component.scss'],
})
export class NewOrEditSettingPaymentComponent
  extends BaseNeworeditComponent<PaymentModel>
  implements OnInit
{
  constructor(
    private settingPaymentService: SettingPaymentService,
    common: Utilities,
    translate: TranslateService,
    private confirmMationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {
    super(common, translate, confirmMationService, PaymentModel);
  }

  listWarehouse = [];
  isLoadWarehouse = false;

  form = this.formBuilder.group({
    id: [''],
    customerCode: ['', Validators.required],
    warehouseCode: ['', Validators.required],
    isRepresentative: [0],
  });

  get customerCode() {
    return this.form.get('customerCode');
  }

  get warehouseCode() {
    return this.form.get('warehouseCode');
  }

  async getListWareHouse() {
    this.isLoadWarehouse = true;
    const response = await this.settingPaymentService.getWarehouses();
    if (response.type === ResponseTypeEnum.SUCCESS) {
      this.listWarehouse = response.data.map(w => {
        return {
          code: w.code,
          name: `${w.code}-${w.name}`
        }
      });
    } else {
      this.listWarehouse = [];
    }

    this.isLoadWarehouse = false;
  }

  async initBeforeShow(model: PaymentModel) {
    this.isValidate = false;
    this.form.reset();
    this.getListWareHouse();
    if (this.isEdit) {
      this.form.setValue({
        id: model?.id,
        customerCode: this.isEdit ? model?.customerCode : null,
        warehouseCode: model?.warehouseCode,
        isRepresentative: model?.isRepresentative,
      });
    }
  }

  async btnSaveClick() {
    const msg = await this.common.trans(
      this.isEdit ? 'message.confirm_edit' : 'message.confirm_add'
    );
    const resultConfirm = await this.confirmMationService.show(msg);
    if (resultConfirm) {
      this.isValidate = true;
      let infoSubmit = this.form.getRawValue();
      if (this.form.valid) {
        if (infoSubmit.isRepresentative) {
          infoSubmit.isRepresentative = 1;
        } else {
          infoSubmit.isRepresentative = 0;
        }
        this.onSave.emit(infoSubmit);
      }
    }
  }
}
