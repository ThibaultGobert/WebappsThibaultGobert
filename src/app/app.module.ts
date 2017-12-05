import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistItemComponent } from './wishlist-item/wishlist-item.component';
import { AddWishlistItemComponent } from './add-wishlist-item/add-wishlist-item.component';
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    WishlistItemComponent,
    AddWishlistItemComponent,
    AddWishlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
