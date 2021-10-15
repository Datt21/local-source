import { Component, OnInit } from '@angular/core';
import { BaseSearchComponent } from '@shared/components/base-page/base-list.component';
import { LoaderService } from '@shared/services/loader.service';
import { Utilities } from '@shared/services/utilities.service';
import { NotificationService } from '@shared/services/notification.service';
import { ConfirmationService } from '@shared/services/confirmation.service';
import { SettingPaymentService } from '../../services/setting-payment.service';
import { SearchSettingPayment } from '../../models/search-setting-payment.model';
import { PaymentModel } from '../../models/setting-payment.model';
@Component({
  selector: 'app-list-setting-payment',
  templateUrl: './list-setting-payment.component.html',
  styleUrls: ['./list-setting-payment.component.scss'],
})
export class ListSettingPaymentComponent
  extends BaseSearchComponent<SearchSettingPayment, PaymentModel>
  implements OnInit
{
  constructor(
    loader: LoaderService,
    common: Utilities,
    notification: NotificationService,
    public paymentService: SettingPaymentService,
    confirmService: ConfirmationService
  ) {
    super(
      loader,
      common,
      notification,
      confirmService,
      paymentService,
      SearchSettingPayment
    );
  }

  btnClearClick() {
    throw new Error('Method not implemented.');
  }

  trackByFn(index: any, item: any) {
    return item.customerId;
  }
}
