import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './component/user.component';
import {ResetPasswordComponent} from './component/resetpassword.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
