import { Component, OnInit } from '@angular/core';
import { Wishlist } from '../wishlist.model';
import { ActivatedRoute } from '@angular/router';
import { WishlistDataService } from '../wishlist-data.service';

@Component({
  selector: 'app-wishlist-detail',
  templateUrl: './wishlist-detail.component.html',
  styleUrls: ['./wishlist-detail.component.css']
})
export class WishlistDetailComponent implements OnInit {
  private _wishlist: Wishlist;

  constructor(private route: ActivatedRoute, private wishlistDataService: WishlistDataService) { }

  ngOnInit() {
    this.route.data.subscribe(item => this._wishlist = item['wishlist']);
  }
}
