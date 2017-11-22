import {WishlistItem} from '../wishlist-item/wishlistItem.model';

export class Wishlist{
    
    private _wishlistItems = new Array<WishlistItem>();
    private _name;

   
    constructor(name : string) {
        this._name = name;
    }

    get name(){
        return this._name
    }

    set name(name : string){
        this._name=name;
    }

    get wishlistItems(){
        return this._wishlistItems;
    }

    set wishlistItems(wishlistItems: WishlistItem[]){
        this._wishlistItems = wishlistItems;
    }

    addWishlistItem(name: string, price?: number){
        this._wishlistItems.push(new WishlistItem(name, price));
    }
}