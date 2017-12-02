import { Component, OnInit, Input } from '@angular/core';
import {Wishlist} from '../wishlist/wishlist.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  @Input() public wishlist: Wishlist;

  constructor() { 

    
  }
 
  ngOnInit() {
  }

 

}
