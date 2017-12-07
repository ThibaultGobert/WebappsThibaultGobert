import { Component, OnInit } from '@angular/core';
import { Wishlist } from '../wishlist.model';
import { ActivatedRoute } from '@angular/router';
import { WishlistDataService } from '../wishlist-data.service';
import { WishlistItem } from '../wishlist-item/wishlistItem.model';

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.css']
})
export class WishlistDetailComponent implements OnInit {
  private _wishlist: Wishlist;

  constructor(private route: ActivatedRoute, private _wishlistDataService: WishlistDataService) { }

  ngOnInit() {
    this.route.data.subscribe(item => this._wishlist = item['wishlist']);
  }


  newWishlistItemAdded(wishlistItem : WishlistItem){
    this._wishlistDataService.addNewWishlistItem(wishlistItem, this._wishlist)
       .subscribe(item => this._wishlist.wishlistItems.push(item));
       
  }
}
