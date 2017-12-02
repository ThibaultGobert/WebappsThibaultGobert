import { Component, OnInit } from '@angular/core';
import {WishlistDataService} from './wishlist/wishlist-data.service';
import {WishlistItemDataService} from './wishlist-item/wishlist-item-data.service';
import {WishlistItem} from './wishlist-item/wishlistItem.model';
import {Wishlist} from './wishlist/wishlist.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WishlistDataService , WishlistItemDataService]
})
export class AppComponent implements OnInit{
  title = 'app';
  public _wishlist;
  private _wishlistItems = new Array<WishlistItem>();

  constructor(private _wishlistDataService : WishlistDataService, private _wishlistItemDataService : WishlistItemDataService){

  }

 ngOnInit(){
   this._wishlist = this._wishlistDataService.wishlist;
   //this._wishlistDataService.wishlist.subscribe(items => this._wishlist = items);
 }

 get wishlist(){
    return this._wishlist;
 }




  newWishlistItemAdded(wishlistItem){
    console.log(wishlistItem);
    this._wishlistDataService.addNewWishlistItem(wishlistItem).subscribe(item => this._wishlist[1 ].wishlistItems.push(item));
    //this._wishlistItemDataService.addNewWishlistItem(wishlistItem);
  }


 
}
