import { Injectable } from '@angular/core';
import {Wishlist} from './wishlist.model';
import {WishlistItem} from '../wishlist-item/wishlistItem.model';

import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class WishlistDataService {
  private _appUrl = 'http://localhost:4200/API';
  private _wishlist : Wishlist;

  constructor(private http: Http) { 

  }

  get wishlist(): Observable<Wishlist[]>{
    return this.http.get(`${this._appUrl}/wishlists/`).map(response => response.json().map( item => Wishlist.fromJSON(item)));
  }

  getWishlist(id): Observable<Wishlist>{
    return this.http.get(`${this._appUrl}/wishlist/${id}`).map(response => response.json().map( item => 
    Wishlist.fromJSON(item)));
  }

  addNewWishlist(rec) : Observable<Wishlist>{
    return this.http.post(`${this._appUrl}/wishlists/`, rec).map(res => res.json()).map(item => Wishlist.fromJSON(item));
  }

  removeWishlist(rec) {
    return this.http.delete(`${this._appUrl}/wishlist/${rec.id}`).map(res => res.json()).map (item =>
    Wishlist.fromJSON(item));
  }

  //slide 42, addNewWishlistItem naar hier verplaatsen en dan nog eens wishlist getter aanroepen voor changes? 
 
  addNewWishlistItem(wishlistItem: WishlistItem, rec: Wishlist) : Observable<WishlistItem>{
    return this.http.post(`${this._appUrl}/wishlist/${rec.id}/wishlistItems`, wishlistItem)
            .map(res => res.json()).map(item => WishlistItem.fromJSON(item));
  }

  /*
  addNewWishlistItem(rec, items) : Observable<WishlistItem>{
    return this.http.post(`${this._appUrl}/wishlists/`, rec).map(res => res.json()).map(item => WishlistItem.fromJSON(item));
    
  }
*/
  




//  get wishlistItems(
    
 // ){}
}