import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {WishlistItem} from '../wishlist-item/wishlistItem.model';
import { WishlistDataService } from '../wishlist-data.service';


@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() public wishlistItem : WishlistItem;
  @Output() public deleteWishlistItem = new EventEmitter<WishlistItem>();
  
  
  constructor( ) { }

  ngOnInit() {
  }

  removeWishlistItem(){
    this.deleteWishlistItem.emit(this.wishlistItem);
  }

}
