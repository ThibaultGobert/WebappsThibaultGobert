import { Component, OnInit, OnDestroy } from '@angular/core';
import {WishlistDataService} from './wishlist/wishlist-data.service';
import {WishlistItem} from './wishlist-item/wishlistItem.model';
import {Wishlist} from './wishlist/wishlist.model';
import {Observable} from 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WishlistDataService]
})

export class AppComponent implements OnDestroy, OnInit{
  title = 'app';
  public _wishlist : Wishlist[];
  private myUnsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private _wishlistDataService : WishlistDataService){
    
  }

 ngOnInit(){
  this._wishlistDataService.wishlist.subscribe(item => {
    this._wishlist = item;
  });
 }

 ngOnDestroy(){
  this.myUnsubscribe.next(true);
  this.myUnsubscribe.complete();
}

 get wishlist(){
    return this._wishlist;
 }

 newWishlistAdded(wishlist : Wishlist){
   this._wishlistDataService.addNewWishlist(wishlist).subscribe(item => this._wishlist.push(item));
 }

 removeWishlist(wishlist : Wishlist){
  this._wishlistDataService.removeWishlist(wishlist).subscribe(item => this._wishlist = this._wishlist
        .filter(val => item.id !== val.id));
 }

  newWishlistItemAdded(wishlistItem : WishlistItem){
    this._wishlistDataService.addNewWishlistItem(wishlistItem, this._wishlist[0])
       .subscribe(item => this._wishlist[0].wishlistItems.push(item));
       
  }


 
}
