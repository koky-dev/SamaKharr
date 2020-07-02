import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerSigninPageRoutingModule } from './seller-signin-routing.module';

import { SellerSigninPage } from './seller-signin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerSigninPageRoutingModule
  ],
  declarations: [SellerSigninPage]
})
export class SellerSigninPageModule {}
