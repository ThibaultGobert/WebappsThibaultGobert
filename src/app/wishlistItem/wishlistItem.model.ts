export class WishlistItem{
    private _name: string;
    private _price?: number;

    constructor(name: string, price?: number) {
        this._name = name;
        this._price=price;
    }
}