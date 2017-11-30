import { Component } from '@angular/core';
import {WishlistDataService} from './wishlist/wishlist-data.service';
import {WishlistItemDataService} from './wishlist-item/wishlist-item-data.service';
import {WishlistItem} from './wishlist-item/wishlistItem.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WishlistDataService , WishlistItemDataService]
})
export class AppComponent {
  title = 'app';
  private _wishlist;
  private _wishlistItems = new Array<WishlistItem>();

  constructor(private _wishlistDataService : WishlistDataService, private _wishlistItemDataService : WishlistItemDataService){
    this._wishlist = _wishlistDataService.wishlist;
    this._wishlistItems = _wishlistItemDataService.wishlistItems;
    this._wishlist._wishlistItems = this._wishlistItems;
    
  }

  newWishlistItemAdded(wishlistItem){
    this._wishlistItemDataService.addNewWishlistItem(wishlistItem);
  }

 
}
