import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Wishlist } from './wishlist.model';
import { WishlistDataService } from './wishlist-data.service';



@Injectable ()
export class WishlistResolver implements Resolve<Wishlist> {

    constructor(private wishlistService: WishlistDataService){}

    resolve(route: ActivatedRouteSnapshot,
            state : RouterStateSnapshot): Observable<Wishlist>{
        return this.wishlistService.getWishlist(route.params['id']);
    }
}