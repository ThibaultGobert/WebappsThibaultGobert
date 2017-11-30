let mongoose = require('mongoose');

let WishlistItemSchema = new mongoose.Schema({
    name : String
});

mongoose.model('WishlistItem', WishlistItemSchema);