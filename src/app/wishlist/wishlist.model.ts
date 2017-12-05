import {WishlistItem} from '../wishlist-item/wishlistItem.model';

export class Wishlist{
    private _id: string;
    private _wishlistItems;
    private _name : string;

   
    static fromJSON(json): Wishlist {
        const rec = new Wishlist(json.name, json.wishlistItems);
        rec._id = json._id;
        return rec;
    }

    constructor(name : string, wishlistItems?: WishlistItem[]) {
        this._name = name;
        this._wishlistItems = wishlistItems || new Array<Wishlist>();
    }  

    get id(){
       return this._id;
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

    addWishlistItem(wishlistItem : WishlistItem){
        this._wishlistItems.push(wishlistItem);
    }

 

    toJSON(){
        return {
            _id : this._id,
            name: this._name,
            wishlistItems: this._wishlistItems
        };
    }
}