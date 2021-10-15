import { Component, OnInit } from '@angular/core';
import { BaseSearchComponent } from '@shared/components/base-page/base-list.component';
import { ConfirmationService } from '@shared/services/confirmation.service';
import { LoaderService } from '@shared/services/loader.service';
import { NotificationService } from '@shared/services/notification.service';
import { Utilities } from '@shared/services/utilities.service';
import { SearchSettingWarehouse } from '../../models/search-settting-warehouse.model';
import { Warehouse } from '../../models/setting-warehouse.model';
import { SettingWarehouseService } from '../../services/setting-warehouse.service';

@Component({
  selector: 'app-list-setting-warehouse',
  templateUrl: './list-setting-warehouse.component.html',
  styleUrls: ['./list-setting-warehouse.component.scss'],
})
export class ListSettingWarehouseComponent
  extends BaseSearchComponent<SearchSettingWarehouse, Warehouse>
  implements OnInit
{
  constructor(
    loader: LoaderService,
    common: Utilities,
    notification: NotificationService,
    warehouseService: SettingWarehouseService,
    confirmService: ConfirmationService
  ) {
    super(
      loader,
      common,
      notification,
      confirmService,
      warehouseService,
      SearchSettingWarehouse
    );
  }

  async ngOnInit() {
    super.ngOnInit();
  }

  btnClearClick() {
    this.search.name = '';
    this.search.code = '';
  }

  trackByFn(index: any, item: any) {
    return item.code;
  }
}
