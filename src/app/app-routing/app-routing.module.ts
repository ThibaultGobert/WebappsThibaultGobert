
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuardService } from '../user/auth-guard.service';

const appRoutes: Routes = [
  { path: 'wishlist',
  canActivate : [AuthGuardService],
  loadChildren: 'app/wishlist/wishlist.module#WishlistModule'},
  { path: '', redirectTo: 'wishlist/list', pathMatch: 'full'},
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