import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerSigninPage } from './seller-signin.page';

const routes: Routes = [
  {
    path: '',
    component: SellerSigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerSigninPageRoutingModule {}
