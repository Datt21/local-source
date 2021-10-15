import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AccountService } from '@app/auth/services/account-mns.service';
import { UiModalComponent } from '@shared/components/modal/ui-modal/ui-modal.component';
import { environment } from '@src/environments/environment';
import { LoaderService } from '@shared/services/loader.service';
import { NotificationService } from '@shared/services/notification.service';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { AuthorizationModel } from '@shared/models/authorization.model';
import { AuthService } from '@app/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { CustomStorageService } from '@shared/custom-storage';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-login-v3',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class AuthLoginV3Component implements OnInit {
  @ViewChild('formLogin', { static: false }) public formLogin: UiModalComponent;
  url: SafeResourceUrl;
  msgs: string;
  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private accountService: AccountService,
    private noticeService: NotificationService,
    private loaderService: LoaderService,
    private authService: AuthService,
    private cookieService: CookieService,
    private customStorageService: CustomStorageService
  ) {
    this.cookieService.delete('token');
    this.cookieService.delete('currentUser');
  }
  ngOnInit() { }

  showFormLogin() {
    this.loaderService.show();
    this.formLogin.show();
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      environment.endpointFrontendAuthen + '/login/2'
    );
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
  }

  @HostListener('window:message', ['$event'])
  async onMessage(event) {
    if (event.data && event.data.token) {
      const result = await this.accountService.getDetailUser(event.data.token.token);
      if (result.type === ResponseTypeEnum.SUCCESS) {
        const accountInfo: AuthorizationModel = result.data?.userInfo;
        this.authService.saveTokenToCookie(result.data?.token);
        this.customStorageService.setCurrentUser(accountInfo);
        this.formLogin.hide();
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('');
        this.router.navigate([`/admin`]);
      } else {
        this.noticeService.showError(result.message);
      }
    } else if (event.data && event.data.isClose === true) {
      this.formLogin.hide();
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
  }

  resetPassWord() {
    this.loaderService.show();
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      environment.endpointFrontendAuthen + '/reset-pass/2'
    );
    this.formLogin.show();
    setTimeout(() => {
      this.loaderService.hide();
    }, 1000);
  }
}
