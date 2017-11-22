import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistItemComponent } from './wishlist-item/wishlist-item.component';
import { AddWishlistItemComponent } from './add-wishlist-item/add-wishlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishlistItemComponent,
    AddWishlistItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
