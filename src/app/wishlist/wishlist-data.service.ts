import { Injectable } from '@angular/core';
import {Wishlist} from './wishlist.model';

@Injectable()
export class WishlistDataService {
  private _wishlist;
  constructor() { 

    this._wishlist = new Wishlist("Thibault");
  }

  get wishlist() : Wishlist{
    return this._wishlist;
  }
}
