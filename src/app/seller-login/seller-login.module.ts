import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerLoginPageRoutingModule } from './seller-login-routing.module';

import { SellerLoginPage } from './seller-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerLoginPageRoutingModule
  ],
  declarations: [SellerLoginPage]
})
export class SellerLoginPageModule {}
