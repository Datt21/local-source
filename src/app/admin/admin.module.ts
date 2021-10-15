import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppTranslationModule } from '../app.translation.module';
import { TranslateService } from '@ngx-translate/core';

import { AdminComponent } from './theme/layout/admin/admin.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import {
  NgbButtonsModule,
  NgbDropdownModule,
  NgbTabsetModule,
  NgbTooltipModule,
  NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';
import { SharedInterceptor } from 'src/shared/interceptor/shared.interceptor';
import { PageForbiddenComponent } from './pages/page-forbidden/page-forbidden.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    PageNotFoundComponent,
    PageForbiddenComponent, ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    AppTranslationModule,
    SharedModule,
    NgbModalModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule
  ],
  providers: [
    NavigationItem,
    TranslateService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SharedInterceptor,
      multi: true,
    },
  ],
})
export class AdminModule { }
