import { Injectable } from '@angular/core';
import {WishlistItem} from './wishlistItem.model';

@Injectable()
export class WishlistItemDataService {
private _wishlistItems = new Array<WishlistItem>();
  constructor() { 
    let wishlistItem1 = new WishlistItem("voetbal");
    let wishlistItem2 = new WishlistItem("scheenlappen");
    let wishlistItem3 = new WishlistItem("keepershandschoenen");

    this._wishlistItems.push(wishlistItem1);
    this._wishlistItems.push(wishlistItem2);
    this._wishlistItems.push(wishlistItem3);
  }

  get wishlistItems() : WishlistItem[]{
    return this._wishlistItems;
  }

  /*
  addNewWishlistItem(wishlistItem){
    this._wishlistItems.push(wishlistItem);
  }
*/
}
