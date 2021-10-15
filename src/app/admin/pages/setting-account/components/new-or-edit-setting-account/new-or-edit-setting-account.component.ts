import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseNeworeditComponent } from '@shared/components/base-page/base-new-or-edit.component';
import { CostdisplayClassificationEnum } from '@shared/enums/cost-display-classification.enum';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { Constants } from '@shared/models/constants';
import { ConfirmationService } from '@shared/services/confirmation.service';
import { Utilities } from 'src/shared/services/utilities.service';
import { SettingAccount } from '../../models/setting-account.model';
import { SettingAccountService } from '../../services/setting-account.service';

@Component({
  selector: 'app-new-or-edit-setting-account',
  templateUrl: './new-or-edit-setting-account.component.html',
  styleUrls: ['./new-or-edit-setting-account.component.scss']
})
export class NewOrEditSettingAccountComponent extends BaseNeworeditComponent<SettingAccount>{

  listUserMaster = [];
  listDepartmentMaster = [];
  listWarehouse = [];
  listRole = [];
  listCostClassification = [];
  isLoadUserMaster = false;
  isLoadWarehouses = false;
  isLoadDepartments = false;

  form = this.formBuilder.group({
    code: ['', Validators.required],
    email: ['', Validators.email],
    department: ['', Validators.required],
    warehouseCode: [''],
    costDisplayClassification: [''],
    role: ['', [Validators.required]],
  });

  constructor(
    common: Utilities,
    translate: TranslateService,
    confirmService: ConfirmationService,
    private formBuilder: FormBuilder,
    private service: SettingAccountService,
  ) {
    super(common, translate, confirmService, SettingAccount);
    this.listRole = Constants.LIST_ROLE.map(role => {
      return {
        value: role,
        label: role
      }
    })

    this.listCostClassification = [
      {
        value: CostdisplayClassificationEnum.DO,
        label: CostdisplayClassificationEnum.DO,
      },
      {
        value: CostdisplayClassificationEnum.DO_NOT,
        label: CostdisplayClassificationEnum.DO_NOT,
      }
    ]
  }

  get code() {
    return this.form.get('code');
  }

  get department() {
    return this.form.get('department');
  }

  get role() {
    return this.form.get('role');
  }

  /**
   * Load data before show modal
   */
  async initBeforeShow(model: SettingAccount) {
    this.isValidate = false;
    this.form.reset();
    Promise.all(
      [
        this.getListDepartment(),
        this.getListUserMaster(),
        this.getListWarehouse(),
      ]
    );
    if (this.isEdit) {
      this.form.setValue({
        code: model?.code,
        email: model?.email,
        department: model?.departmentCode,
        warehouseCode: model?.warehouseCode,
        costDisplayClassification: model?.costDisplayClassification,
        role: model?.role,
      });
    } else {
      this.form.patchValue({
        code: null,
        usercode: this.listUserMaster.length > 0 ? this.listUserMaster[0].value : '',
        role: this.listRole.length > 0 ? this.listRole[0].value : '',
        costDisplayClassification: CostdisplayClassificationEnum.DO
      })
    }
  }

  async getListUserMaster() {
    this.isLoadUserMaster = true;
    const result = await this.service.getListUserMaster();
    if (result.type === ResponseTypeEnum.SUCCESS) {
      this.listUserMaster = result.data;
    } else {
      this.listUserMaster = [];
    }
    this.isLoadUserMaster = false;
  }

  async getListWarehouse() {
    this.isLoadWarehouses = true;
    const result = await this.service.getListWarehouse();
    if (result.type === ResponseTypeEnum.SUCCESS) {
      this.listWarehouse = result.data.map(warehouse => {
        return {
          value: warehouse.code,
          label: `${warehouse.code}ー${warehouse.name}`
        }
      });
    } else {
      this.listWarehouse = [];
    }
    this.isLoadWarehouses = false;
  }

  async getListDepartment() {
    this.isLoadDepartments = true;
    const result = await this.service.getListDepartment();
    if (result.type === ResponseTypeEnum.SUCCESS) {
      this.listDepartmentMaster = result.data;
    } else {
      this.listDepartmentMaster = [];
    }
    this.isLoadDepartments = false;
  }
}
