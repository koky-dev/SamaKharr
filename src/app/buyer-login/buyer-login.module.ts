import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerLoginPageRoutingModule } from './buyer-login-routing.module';

import { BuyerLoginPage } from './buyer-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerLoginPageRoutingModule
  ],
  declarations: [BuyerLoginPage]
})
export class BuyerLoginPageModule {}
