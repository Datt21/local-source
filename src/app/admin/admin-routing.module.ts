import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RoleGuard } from 'src/shared/guards/role-access.guard';
import { PageForbiddenComponent } from './pages/page-forbidden/page-forbidden.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'setting-account',
      },
      {
        path: 'setting-account',
        loadChildren: () =>
          import('./pages/setting-account/setting-account.module').then(
            (module) => module.SettingAccountModule
          ),
        canActivate: [RoleGuard],
        data: { roles: [] }
      },
      {
        path: 'setting-product',
        loadChildren: () =>
          import('./pages/setting-product/setting-product.module').then(
            (module) => module.SettingProductModule
          ),
        canActivate: [RoleGuard],
        data: { roles: [] }
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('./pages/customer/customer.module').then(
            (module) => module.CustomerModule
          ),
        canActivate: [RoleGuard],
        data: { roles: [] }
      },
      {
        path: 'setting-payment',
        loadChildren: () =>
          import('./pages/setting-payment/setting-payment.module').then(
            (module) => module.SettingPaymentModule
          ),
        canActivate: [RoleGuard],
        data: { roles: [] }
      },
      {
        path: 'setting-warehouse',
        loadChildren: () =>
          import('./pages/setting-warehouse/setting-warehouse.module').then(
            (module) => module.SettingWarehouseModule
          ),
        canActivate: [RoleGuard],
        data: { roles: [] }
      },
      {
        path: 'sample',
        loadChildren: () =>
          import('./pages/sample/sample.module').then(
            (module) => module.SampleModule
          ),
        canActivate: [RoleGuard],
        data: { roles: [] }
      },
      {
        path: 'forbidden',
        component: PageForbiddenComponent
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
