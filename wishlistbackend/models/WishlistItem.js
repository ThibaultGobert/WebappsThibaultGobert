let mongoose = require('mongoose');

let WishlistItemSchema = new mongoose.Schema({
    name : String
});

    WishlistItemSchema.pre('remove', function(next){
        this.model('Wishlist').update({},
        { $pull: { ingredients: this._id } },
        { safe: true, multi: true }, next);
    })
mongoose.model('WishlistItem', WishlistItemSchema);