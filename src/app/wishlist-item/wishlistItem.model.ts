export class WishlistItem{
    private _name: string;
    private _price?: number;

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
}