let mongoose = require('mongoose');

let WishlistSchema = new mongoose.Schema({
  //  username : String,
    name : String,
    wishlistItems : [{type: mongoose.Schema.Types.ObjectId, ref: 'WishlistItem'}]
});

mongoose.model('Wishlist', WishlistSchema);
