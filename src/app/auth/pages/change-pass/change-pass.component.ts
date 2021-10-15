import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangePassword } from '../../models/change-password';
import { AccountExternalService } from '@app/auth/services/account-external.service';
import { ConfirmationService } from 'src/shared/services/confirmation.service';
import { LoaderService } from 'src/shared/services/loader.service';
import { NotificationService } from 'src/shared/services/notification.service';
import { Utilities } from 'src/shared/services/utilities.service';
import { AuthService } from '../../services/auth.service';
import { Constants } from 'src/shared/models/constants';
// import { CustomStorageService } from '@shared/custom-storage';
import { ResponseTypeEnum } from '@shared/enums/response-type.enum';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss'],
  providers: [AccountExternalService]
})
export class ChangePassComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<ChangePassword> = new EventEmitter();

  form = this.formBuilder.group({
    oldPassword: ['', [Validators.required]],
    newPassword: [''],
    confirmPassword: [''],
  }, { validator: ChangePassComponent.checkPasswords });
  isSubmit: boolean;
  public isChangedPass = 1;

  constructor(
    protected common: Utilities,
    private formBuilder: FormBuilder,
    private userService: AccountExternalService,
    private confirm: ConfirmationService,
    private loader: LoaderService,
    private notification: NotificationService,
    private authService: AuthService,
    // private customStorageService: CustomStorageService
  ) { }

  get controls(): any {
    return this.form.controls;
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }


  static checkPasswords(group: FormGroup) {
    const oldPass = group.controls.oldPassword.value;
    const newPass = group.controls.newPassword.value;
    const confirmPass = group.controls.confirmPassword.value;

    if (oldPass && newPass && oldPass === newPass) { return { samePass: true }; }
    if (newPass && confirmPass && newPass !== confirmPass) { return { notSame: true }; }
    return null;
  }

  ngOnInit() {
    // this.isChangedPass = this.customStorageService.getCurrentUser()?.ischangedpassword;
    // if (this.isChangedPass === 0) { this.controls.oldPassword.setValidators(null); }
    this.resetForm();
  }

  async btnSaveClick() {
    this.isSubmit = true;
    if (this.form.valid) {
      // confirm
      const confirm = await this.confirm.show(await this.common.trans('message.confirm_save_message_pass'));
      if (confirm === true) {
        this.loader.show(await this.common.trans('other.processing'));
        const result = await this.userService.changePasswordAsync(this.form.getRawValue());
        if (result.type === ResponseTypeEnum.SUCCESS) {
          this.loader.hide();
          this.onCancel.emit();
          this.notification.showSuccess(await this.common.trans('change_password.message_success'));
          localStorage.clear();
          this.authService.logout();
        } else {
          if (result.code === Constants.CODE.OLD_PASSWORD_IS_CORRECT) {
            this.controls.oldPassword.setErrors({ incorrectPassword: true });
          }
          else {
            this.notification.showError(result.message);
          }
          this.loader.hide();
        }
      }
    }
  }

  btnCancelClick() {
    this.resetForm();
    this.onCancel.emit();
  }

  resetForm() {
    this.isSubmit = false;
    this.form.reset();
  }
}
