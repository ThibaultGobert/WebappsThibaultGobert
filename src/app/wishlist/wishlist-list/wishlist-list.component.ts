import { Component, OnInit } from '@angular/core';
import {WishlistItem} from '../wishlist-item/wishlistItem.model';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil'; import { WishlistDataService } from '../wishlist-data.service';
import { Wishlist } from '../wishlist.model';
;


@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {
private _wishlists: Wishlist[];
private myUnsubscribe: Subject<boolean> = new Subject<boolean>();


  constructor(private _wishlistDataService : WishlistDataService ) {

  }

  ngOnInit() {
    this._wishlistDataService.wishlist.subscribe(items => this._wishlists = items);
  }


 ngOnDestroy(){
  this.myUnsubscribe.next(true);
  this.myUnsubscribe.complete();
}


  get wishlist(){
    return this._wishlists;
 }


 removeWishlist(wishlist : Wishlist){
  this._wishlistDataService.removeWishlist(wishlist).subscribe(item => this._wishlists = this._wishlists
        .filter(val => item.id !== val.id));
 }

  newWishlistItemAdded(wishlistItem : WishlistItem){
    this._wishlistDataService.addNewWishlistItem(wishlistItem, this._wishlists[0])
       .subscribe(item => this._wishlists[0].wishlistItems.push(item));
       
  }

}
