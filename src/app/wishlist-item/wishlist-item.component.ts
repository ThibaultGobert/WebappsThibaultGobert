import { Component, OnInit, Input } from '@angular/core';
import {WishlistItem} from '../wishlist-item/wishlistItem.model';


@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent implements OnInit {
  @Input() public wishlistItem : WishlistItem;

  constructor() { }

  ngOnInit() {
  }

}
