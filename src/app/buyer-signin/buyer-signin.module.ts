import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyerSigninPageRoutingModule } from './buyer-signin-routing.module';

import { BuyerSigninPage } from './buyer-signin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyerSigninPageRoutingModule
  ],
  declarations: [BuyerSigninPage]
})
export class BuyerSigninPageModule {}
