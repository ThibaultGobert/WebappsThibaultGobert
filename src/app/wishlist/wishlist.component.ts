import { Component, OnInit } from '@angular/core';
import {Wishlist} from '../wishlist/wishlist.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  private _wishlist: Wishlist;

  constructor() { 
    this._wishlist = new Wishlist("Thibault");
    
    this._wishlist.addWishlistItem('voetbal');
    this._wishlist.addWishlistItem('scheenlappen');
    this._wishlist.addWishlistItem('keepershandschoenen');
    
  }

  newWishlistItemAdded(wishlistItem){
    this._wishlist.addWishlistItem(wishlistItem.name);
  }

  ngOnInit() {
  }

}
