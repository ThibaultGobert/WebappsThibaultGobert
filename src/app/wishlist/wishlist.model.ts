import { WishlistItem } from "./wishlist-item/wishlistItem.model";


export class Wishlist{
    public _id: string;
    private _wishlistItems;
    private _name : string;
    private _username: string;

   
    static fromJSON(json): Wishlist {
        const rec = new Wishlist(json.name, json.username, json.wishlistItems);
        rec._id = json._id;
        return rec;
    }

    constructor(name : string, username:string,wishlistItems?: WishlistItem[]) {
        this._username=username;
        this._name = name;
        this._wishlistItems = wishlistItems || new Array<Wishlist>();
    }  

    get id(){
       return this._id;
    }

    set username(username: string){
       this._username = username;
    }
    
    get username(){
        return this._username;
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
            username: this._username,
            wishlistItems: this._wishlistItems
        };
    }
}