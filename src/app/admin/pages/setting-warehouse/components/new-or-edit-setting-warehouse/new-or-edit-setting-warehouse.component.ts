import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseNeworeditComponent } from '@shared/components/base-page/base-new-or-edit.component';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import {
  InventoryAllocationClassification,
} from '@shared/enums/setting-warehouse-enum';
import { ConfirmationService } from '@shared/services/confirmation.service';
import { Utilities } from '@shared/services/utilities.service';
import { Warehouse } from '../../models/setting-warehouse.model';
import { SettingWarehouseService } from '../../services/setting-warehouse.service';

@Component({
  selector: 'app-new-or-edit-setting-warehouse',
  templateUrl: './new-or-edit-setting-warehouse.component.html',
  styleUrls: ['./new-or-edit-setting-warehouse.component.scss'],
})
export class NewOrEditSettingWarehouseComponent extends BaseNeworeditComponent<Warehouse> {

  listDepartmentMaster = [];
  isLoadDepartments = false;

  allocationClassification = [];
  fakeaddressPrintCode = [];

  constructor(
    common: Utilities,
    translate: TranslateService,
    confirmService: ConfirmationService,
    private settingWarehouseService: SettingWarehouseService,
    private formBuilder: FormBuilder
  ) {
    super(common, translate, confirmService, Warehouse);
    this.allocationClassification = [
      {
        status: InventoryAllocationClassification.APPLICABLE,
      },
      {
        status: InventoryAllocationClassification.INAPPLICABLE,
      },
    ];


    // TODO: Call API get list PrintCode
    this.fakeaddressPrintCode = [
      {
        code: '',
        name: ''
      }
    ];
  }

  form = this.formBuilder.group({
    code: ['', [Validators.required, Validators.maxLength(6)]],
    name: ['', [Validators.required, Validators.maxLength(255)]],
    kanaName: ['', [Validators.maxLength(255)]],
    warehouseAbbreviation: [
      '',
      [Validators.required, Validators.maxLength(255)],
    ],
    inventoryManagement: ['', Validators.required],
    logisticsManagement: ['', Validators.required],
    inventoryAllocationClassification: ['', Validators.required],
    addressPrintCode: ['', Validators.maxLength(6)],
  });

  get code() {
    return this.form.get('code');
  }
  get name() {
    return this.form.get('name');
  }
  get kanaName() {
    return this.form.get('kanaName');
  }
  get warehouseAbbreviation() {
    return this.form.get('warehouseAbbreviation');
  }
  get inventoryManagement() {
    return this.form.get('inventoryManagement');
  }
  get logisticsManagement() {
    return this.form.get('logisticsManagement');
  }
  get inventoryAllocationClassification() {
    return this.form.get('inventoryAllocationClassification');
  }
  get addressPrintCode() {
    return this.form.get('addressPrintCode');
  }

  /**
   * Load data before show modal
   */
  async initBeforeShow(model: Warehouse) {
    this.isValidate = false;
    this.form.reset();
    this.getListDepartment();
    if (this.isEdit) {
      const result = await this.settingWarehouseService.get(model.code);
      if (result.type === ResponseTypeEnum.SUCCESS) {
        model = result.data;
      }
      this.form.setValue({
        code: model?.code,
        name: model?.name,
        kanaName: model?.kanaName,
        warehouseAbbreviation: model?.warehouseAbbreviation,
        inventoryManagement: model?.inventoryManagement,
        logisticsManagement: model?.logisticsManagement,
        inventoryAllocationClassification:
          model?.inventoryAllocationClassification,
        addressPrintCode: model?.addressPrintCode,
      });
    } else {
      this.form.patchValue({
        addressPrintCode: ''
      });
      this.form.reset();
    }
  }

  async getListDepartment() {
    this.isLoadDepartments = true;
    const result = await this.settingWarehouseService.getListDepartment();
    if (result.type === ResponseTypeEnum.SUCCESS) {
      this.listDepartmentMaster = result.data;
    } else {
      this.listDepartmentMaster = [];
    }
    this.isLoadDepartments = false;
  }
}
