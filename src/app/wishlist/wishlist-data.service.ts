import { Injectable } from '@angular/core';
import {Wishlist} from './wishlist.model';

import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { WishlistItem } from './wishlist-item/wishlistItem.model';
import { AuthenticationService } from '../user/authentication.service';

@Injectable()
export class WishlistDataService {
  private _appUrl = 'http://localhost:4200/API';
  private _wishlist;

  constructor(private http: Http, private auth: AuthenticationService) { 

  }

  get wishlist(): Observable<Wishlist[]>{
    return this.http.get(`${this._appUrl}/wishlists/`, 
      { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
      .map(response => response.json().map( item => Wishlist.fromJSON(item)));
  }


  getWishlist(id): Observable<Wishlist>{
    return this.http.get(`${this._appUrl}/wishlist/${id}`).map(response => response.json()).map( item => 
    Wishlist.fromJSON(item));
  }

  addNewWishlist(rec) : Observable<Wishlist>{
    return this.http.post(`${this._appUrl}/wishlists/`, rec,
    { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(res => res.json()).map(item => Wishlist.fromJSON(item));
  }

  removeWishlist(rec) : Observable<Wishlist>{
    return this.http.delete(`${this._appUrl}/wishlist/${rec.id}`).map(res => res.json()).map (item =>
    Wishlist.fromJSON(item));
  }

  getWishlistItem(rec, id): Observable<WishlistItem>{
    return this.http.get(`${this._appUrl}/wishlist/${rec.id}/wishlistItems/${id}`).map(res => res.json()).map( item => 
        WishlistItem.fromJSON(item));
  }

  //slide 42, addNewWishlistItem naar hier verplaatsen en dan nog eens wishlist getter aanroepen voor changes? 
 
  addNewWishlistItem(wishlistItem: WishlistItem, rec: Wishlist) : Observable<WishlistItem>{
    return this.http.post(`${this._appUrl}/wishlist/${rec.id}/wishlistItems`, wishlistItem)
            .map(res => res.json()).map(item => WishlistItem.fromJSON(item));
  }

  removeWishlistItem(wishlistItem, rec : Wishlist) : Observable<Wishlist> {
    return this.http.delete(`${this._appUrl}/wishlist/${rec.id}/wishlistItems/${wishlistItem._id}`)
            .map(res => res.json()).map(item => Wishlist.fromJSON(item));

  }

  /*
  addNewWishlistItem(rec, items) : Observable<WishlistItem>{
    return this.http.post(`${this._appUrl}/wishlists/`, rec).map(res => res.json()).map(item => WishlistItem.fromJSON(item));
    
  }
*/
  




//  get wishlistItems(
    
 // ){}
}
