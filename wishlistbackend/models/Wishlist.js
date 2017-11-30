let mongoose = require('mongoose');

let WishlistSchema = new mongoose.Schema({
    name : String,
    wishlistItems : [{type: mongoose.Schema.Types.ObjectId, ref: 'WishlistItem'}]
});

mongoose.model('Wishlist', WishlistSchema);
