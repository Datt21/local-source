import { Component, OnInit } from '@angular/core';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { BaseSearchComponent } from '@shared/components/base-page/base-list.component';
import { ConfirmationService } from 'src/shared/services/confirmation.service';
import { LoaderService } from 'src/shared/services/loader.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { Utilities } from 'src/shared/services/utilities.service';
import { SearchSettingAccount } from '../../models/search-setting-account.model';
import { SettingAccount } from '../../models/setting-account.model';
import { SettingAccountService } from '../../services/setting-account.service';

@Component({
  selector: 'app-list-setting-account',
  templateUrl: './list-setting-account.component.html',
  styleUrls: ['./list-setting-account.component.scss']
})
export class ListSettingAccountComponent extends BaseSearchComponent<SearchSettingAccount, SettingAccount> implements OnInit {

  constructor(
    loader: LoaderService,
    common: Utilities,
    notification: NotificationService,
    private settingAccountService: SettingAccountService,
    confirmService: ConfirmationService,
  ) {
    super(loader, common, notification, confirmService, settingAccountService, SearchSettingAccount);
  }

  btnClearClick() {
    throw new Error('Method not implemented.');
  }

  trackByFn(index: any, item: any) {
    return item.code;
  }

  async updateStatus(setting: SettingAccount) {
    setting.isActive = setting.isActive === 1 ? 0 : 1;
    this.loader.show(await this.common.trans('other.processing'));
    const result = await this.settingAccountService.updateStatus(setting);
    if (result.type === ResponseTypeEnum.SUCCESS) {
      await this.searchAsync();
      this.notification.showSuccess(await this.common.trans('message.update_success'));
    } else {
      this.notification.showError(result.message);
    }
    this.loader.hide();
  }

}
