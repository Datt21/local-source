import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AlertModule,
  BreadcrumbModule,
  CardModule,
  CustomModalModule,
} from './components';
import { ClickOutsideModule } from 'ng-click-outside';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import { AuthGuard } from './guards/auth.guard';
import { RedirectIfAuthenticatedGuard } from './guards/redirect-if-authenticated.guard';
import { AppTranslationModule } from 'src/app/app.translation.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './components/toast/toast.service';
import { AuthService } from '../app/auth/services/auth.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PagerModule } from './modules/pager/pager.module';
import { Utilities } from './services/utilities.service';
import { NotificationService } from './services/notification.service';
import { ConfirmationService } from './services/confirmation.service';
import { TranslateService } from '@ngx-translate/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RoleGuard } from './guards/role-access.guard';
import { calculateItemNoPipe } from './pipes/calculate-item-no';
import { OnlyNumberValidatorDirective } from './directives/only-number';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { jaLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { AppMaxLengthDirective } from './directives/app-max-length.directive';
import { FullSizeToHalfSizeDirective } from './directives/fullsize-to-halfsize.directive';
import { NumberNegativeDirective } from './directives/number-negative.directive';
import { CookieService } from 'ngx-cookie-service';
import { CustomStorageService } from './custom-storage';
import { ChangePassComponent } from '@app/auth/pages/change-pass/change-pass.component';
defineLocale('ja', jaLocale);

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    PagerModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    CustomModalModule,
    ClickOutsideModule,
    AppTranslationModule,
    NgbModalModule,
    BsDatepickerModule.forRoot(),
  ],
  exports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    PagerModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    CustomModalModule,
    ClickOutsideModule,
    SpinnerComponent,
    ToastComponent,
    LoaderComponent,
    ConfirmationComponent,
    ChangePassComponent,
    OnlyNumberValidatorDirective,
    AutofocusDirective,
    BsDatepickerModule,
    calculateItemNoPipe,
    AppMaxLengthDirective,
    FullSizeToHalfSizeDirective,
    NumberNegativeDirective
  ],
  declarations: [
    SpinnerComponent,
    ToastComponent,
    LoaderComponent,
    ConfirmationComponent,
    ChangePassComponent,
    calculateItemNoPipe,
    OnlyNumberValidatorDirective,
    AppMaxLengthDirective,
    FullSizeToHalfSizeDirective,
    NumberNegativeDirective,
    AutofocusDirective,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    ToastService,
    AuthService,
    AuthGuard,
    RoleGuard,
    Utilities,
    NotificationService,
    ConfirmationService,
    TranslateService,
    RedirectIfAuthenticatedGuard,
    BsLocaleService,
    CookieService,
    CustomStorageService
  ],
})
export class SharedModule { }
