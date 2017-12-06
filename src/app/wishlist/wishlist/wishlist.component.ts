import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Wishlist } from '../wishlist.model';
import { WishlistDataService } from '../wishlist-data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() public wishlist: Wishlist;
  @Output() public deleteWishlist = new EventEmitter<Wishlist>();
  constructor(private _wishlistDataService : WishlistDataService) { 

    
  }
 
  ngOnInit() {
  }

  removeWishlist(){
    this.deleteWishlist.emit(this.wishlist);
}

 

}
