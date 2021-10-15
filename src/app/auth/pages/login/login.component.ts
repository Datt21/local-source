import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetPass } from '@app/auth/models/reset-password';
import { AuthService } from '@app/auth/services/auth.service';
import { UiModalComponent } from '@shared/components/modal/ui-modal/ui-modal.component';
import { CustomStorageService } from '@shared/custom-storage';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';
import { AuthorizationModel } from '@shared/models/authorization.model';
import { Constants } from '@shared/models/constants';
import { ConfirmationService } from '@shared/services/confirmation.service';
import { LoaderService } from '@shared/services/loader.service';
import { NotificationService } from '@shared/services/notification.service';
import { Utilities } from '@shared/services/utilities.service';
import { ChangePassComponent } from '../change-pass/change-pass.component';
import { ResetPassComponent } from '../reset-pass/reset-pass.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('resetpassModal') resetpassModal: UiModalComponent;
  @ViewChild('resetPassComponent') resetPassPopupComponent: ResetPassComponent;
  @ViewChild('changepassModal') changepassModal: UiModalComponent;
  @ViewChild('changePassComponent') changePassPopUpComponent: ChangePassComponent;

  loginForm: FormGroup;
  errorMessage: string;
  isSubmit: boolean;
  resetPass: ResetPass = new ResetPass();
  confirmSaveMessageResetPass: string;
  errorMessageChangePass: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderService,
    private confirmService: ConfirmationService,
    private common: Utilities,
    private notification: NotificationService,
    private customStorageService: CustomStorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    localStorage.clear();
    this.errorMessage = '';
    this.isSubmit = false;
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      this.isSubmit = true;
      return;
    }
    this.loaderService.show();
    this.errorMessage = '';
    this.authService.login(this.username.value, this.password.value).subscribe(
      async (res) => {
        if (res.type === ResponseTypeEnum.SUCCESS) {
          // Login success
          const accountInfo: AuthorizationModel = new AuthorizationModel(res.data);
          this.authService.saveTokenToCookie(res.data?.token);
          this.customStorageService.setCurrentUser(accountInfo);
          this.loaderService.hide();
          // if (accountInfo.ischangedpassword == 0) {
          //   this.showChangePassword();
          // } else {
          this.router.navigate(['/admin']);
          // }
        } else {
          // Login error
          switch (res.code) {
            // Error: Username or password is incorrect
            case Constants.CODE.AUTH_FAILED:
              this.errorMessage = await this.common.trans(
                'login.username_or_password_is_incorrect'
              );
              this.loaderService.hide();
              this.authService.logout();
              break;
            // Error: Username or password is incorrect
            case Constants.CODE.AUTH_FAILED:
              this.errorMessage = await this.common.trans(
                'login.username_or_password_is_incorrect'
              );
              this.loaderService.hide();
              this.authService.logout();
              break;
            // Other Error
            default:
              this.errorMessage = await this.common.trans('login.server_error');
              this.loaderService.hide();
              this.authService.logout();
              break;
          }
        }
      },
      async () => {
        this.errorMessage = await this.common.trans('login.server_error');
        this.loaderService.hide();
        this.authService.logout();
      }
    );
  }

  // Submit Reset password
  async saveResetPass(event) {
    this.errorMessage = '';
    this.confirmSaveMessageResetPass = await this.common.trans('message.confirm_save_message_reset_pass');
    const resultConfirm = await this.confirmService.show(
      this.confirmSaveMessageResetPass
    );
    if (resultConfirm === true) {
      const msgProcessing = await this.common.trans('other.processing');
      this.loaderService.show(msgProcessing);
      this.resetPass.username = event.username;
      this.authService.resetPass(this.resetPass).subscribe(
        async (result) => {
          if (result && result.type === ResponseTypeEnum.SUCCESS) {
            this.loginForm.reset();
            localStorage.clear();
            this.resetpassModal.hide();
            const msgSuccess = await this.common.trans(
              'reset_password.message_success'
            );
            this.loaderService.hide();
            this.notification.showSuccess(msgSuccess);
          } else {
            if (result && result.code === Constants.CODE.BAD_REQUEST
            ) {
              this.errorMessageChangePass = await this.common.trans(
                'reset_password.message_incorrect'
              );
              this.loaderService.hide();
            }
            else {
              this.notification.showError(await this.common.trans('message.try_later'));
              this.loaderService.hide();
            }
          }
        },
        async (err) => {
          this.errorMessageChangePass = await this.common.trans(
            'reset_password.message_internal_server_error'
          );
          this.loaderService.hide();
        }
      );
    }
  }

  resetPassWord() {
    this.resetPassPopupComponent.ngOnInit();
    this.resetpassModal.show();
  }

  showChangePassword() {
    if (this.changepassModal) {
      this.changepassModal.ngOnInit();
      this.changepassModal.show();
    }
  }

  btnCancelResetClick() {
    if (this.resetPassPopupComponent) {
      this.resetPassPopupComponent.btnCancelClick();
    }
  }

  btnSaveResetClick() {
    if (this.resetPassPopupComponent) {
      this.resetPassPopupComponent.btnSaveClick();
    }
  }

}

