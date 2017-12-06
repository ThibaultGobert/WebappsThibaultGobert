
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'wishlist', loadChildren: 'app/wishlist/wishlist.module#WishlistModule'},
  //{ path: '', redirectTo: 'wishlist/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent} 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }