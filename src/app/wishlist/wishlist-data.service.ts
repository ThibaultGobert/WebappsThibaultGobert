import { Injectable } from '@angular/core';
import {Wishlist} from './wishlist.model';
import {WishlistItem} from '../wishlist-item/wishlistItem.model';

import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WishlistDataService {
  private _appUrl = 'http://localhost:4200/API/wishlist/';

  constructor(private http: Http) { 

  }

  get wishlist(): Observable<Wishlist[]>{
    return this.http.get(this._appUrl).map(response => response.json().map( item =>
            new Wishlist(item.name, item.wishlistItems)));
  }

  //slide 42, addNewWishlistItem naar hier verplaatsen en dan nog eens wishlist getter aanroepen voor changes? 

  addNewWishlistItem(rec) : Observable<WishlistItem>{
    return this.http.post(this._appUrl, rec).map(res => res.json()).map(item => new WishlistItem(item.name));
  }

//  get wishlistItems(
    
 // ){}
}
