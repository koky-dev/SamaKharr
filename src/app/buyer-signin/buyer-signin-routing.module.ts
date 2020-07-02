import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerSigninPage } from './buyer-signin.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerSigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerSigninPageRoutingModule {}
