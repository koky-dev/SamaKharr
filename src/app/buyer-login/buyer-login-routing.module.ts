import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyerLoginPage } from './buyer-login.page';

const routes: Routes = [
  {
    path: '',
    component: BuyerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerLoginPageRoutingModule {}
