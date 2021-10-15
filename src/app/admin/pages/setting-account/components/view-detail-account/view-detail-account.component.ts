import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseDetailComponent } from '@shared/components/base-page/base-detail.component';
import { LoaderService } from '@shared/services/loader.service';
import { Utilities } from 'src/shared/services/utilities.service';
import { SettingAccount } from '../../models/setting-account.model';

@Component({
  selector: 'app-detail-setting-account',
  templateUrl: './view-detail-account.component.html',
  styleUrls: ['./view-detail-account.component.scss'],
})
export class ViewDetailAccountComponent extends BaseDetailComponent<SettingAccount> {
  form = this.formBuilder.group({
    code: [''],
    name: [''],
    department: [''],
    warehouse: [''],
    costDisplayClassification: [''],
    role: [''],
  });

  constructor(
    common: Utilities,
    translate: TranslateService,
    private formBuilder: FormBuilder,
    private loader: LoaderService
  ) {
    super(common, translate, SettingAccount);
  }

  /**
   * Load data before show modal
   */
  async initBeforeShow(model: SettingAccount) {
    this.loader.show();

    this.form.reset();
    this.form.setValue({
      code: model?.code,
      name: model?.name,
      department: `${model?.departmentCode}ー${
        model?.departmentName ? model?.departmentName : ''
      }`,
      warehouse: model?.warehouseCode
        ? `${model?.warehouseCode}${
            model?.warehouseName ? 'ー' + model?.warehouseName : ''
          }`
        : '',
      costDisplayClassification: model?.costDisplayClassification,
      role: model?.role,
    });

    this.loader.hide();
  }
}
