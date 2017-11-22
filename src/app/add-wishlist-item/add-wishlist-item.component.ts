import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {WishlistItem} from '../wishlist-item/wishlistItem.model';

@Component({
  selector: 'app-add-wishlist-item',
  templateUrl: './add-wishlist-item.component.html',
  styleUrls: ['./add-wishlist-item.component.css']
})
export class AddWishlistItemComponent implements OnInit {
  @Output() public newWishlistItem = new EventEmitter<WishlistItem>();



  addWishlistItem(newWishlistItemName : HTMLInputElement) : boolean {
    let wishlistItem = new WishlistItem(newWishlistItemName.value)
    this.newWishlistItem.emit(wishlistItem);
    return false;
  }

  constructor() { }
  
    ngOnInit() {
    }
}
