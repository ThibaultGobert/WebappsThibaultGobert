export class WishlistItem{
    public _id: string;
    private _name: string;
    private _price?: number;

    static fromJSON(json) : WishlistItem {
        const rec = new WishlistItem(json.name);
        rec._id = json._id;
        return rec;
    }

    constructor(name: string, price?: number) {
        this._name = name;
        this._price=price;
    }

    get name(){
        return this._name;
    }

    set name(name : string){
        this._name = name;
    }

    get price(){
        return this._price;
    }

    set price(price : number){
        this._price = price;
    }

    toJSON(){
        return {
            _id: this._id,
            name : this._name,
        }
    }
}