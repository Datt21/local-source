import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CustomStorageService } from 'src/shared/custom-storage';
import { Utilities } from 'src/shared/services/utilities.service';
import { ConfirmationService } from 'src/shared/services/confirmation.service';
import { LoaderService } from '@shared/services/loader.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],
})
export class NavRightComponent implements OnInit {
  userName: string;
  constructor(
    private authService: AuthService,
    private common: Utilities,
    private confirmService: ConfirmationService,
    private customStorageService: CustomStorageService,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.getUserName();
  }

  async logOut() {
    const msg = await this.common.trans('message.confirm_logout');
    const resultConfirm = await this.confirmService.show(msg);
    if (resultConfirm) {
      this.loaderService.show();
      this.authService.logout();
      this.loaderService.hide();
    }
  }

  getUserName() {
    this.userName = this.customStorageService.getCurrentUser()?.name;
  }
}
