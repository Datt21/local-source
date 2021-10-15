import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../shared/guards/auth.guard';
import { RedirectIfAuthenticatedGuard } from '../shared/guards/redirect-if-authenticated.guard';
import { RoleGuard } from 'src/shared/guards/role-access.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/admin/setting-account' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [RedirectIfAuthenticatedGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
  },
];

const config: ExtraOptions = {
  useHash: false,
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
