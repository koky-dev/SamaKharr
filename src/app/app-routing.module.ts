import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'my-products',
    loadChildren: () => import('./my-products/my-products.module').then( m => m.MyProductsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'buyer-login',
    loadChildren: () => import('./buyer-login/buyer-login.module').then( m => m.BuyerLoginPageModule)
  },
  {
    path: 'seller-login',
    loadChildren: () => import('./seller-login/seller-login.module').then( m => m.SellerLoginPageModule)
  },
  {
    path: 'seller-signin',
    loadChildren: () => import('./seller-signin/seller-signin.module').then( m => m.SellerSigninPageModule)
  },
  {
    path: 'buyer-signin',
    loadChildren: () => import('./buyer-signin/buyer-signin.module').then( m => m.BuyerSigninPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
