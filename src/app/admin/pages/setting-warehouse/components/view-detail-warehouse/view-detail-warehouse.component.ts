import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BaseDetailComponent } from '@shared/components/base-page/base-detail.component';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { LoaderService } from '@shared/services/loader.service';
import { Utilities } from 'src/shared/services/utilities.service';
import { Warehouse } from '../../models/setting-warehouse.model';
import { SettingWarehouseService } from '../../services/setting-warehouse.service';

@Component({
  selector: 'app-view-detail-warehouse',
  templateUrl: './view-detail-warehouse.component.html',
  styleUrls: ['./view-detail-warehouse.component.scss'],
})
export class ViewDetailWarehouseComponent extends BaseDetailComponent<Warehouse> {
  form = this.formBuilder.group({
    code: [''],
    name: [''],
    kanaName: [''],
    warehouseAbbreviation: [''],
    inventoryManagement: [''],
    logisticsManagement: [''],
    inventoryAllocationClassification: [''],
    addressPrintCode: [''],
  });

  constructor(
    common: Utilities,
    translate: TranslateService,
    private formBuilder: FormBuilder,
    private loader: LoaderService,
    public settingWarehouseService: SettingWarehouseService
  ) {
    super(common, translate, Warehouse);
  }

  /**
   * Load data before show modal
   */
  async initBeforeShow(model: Warehouse) {
    this.loader.show();
    this.form.reset();
    const result = await this.settingWarehouseService.detail(model);
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

    this.loader.hide();
  }
}
