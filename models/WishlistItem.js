let mongoose = require('mongoose');

let WishlistItemSchema = new mongoose.Schema({
    name : String
},
    {
        usePushEach: true
    }
);

mongoose.model('WishlistItem', WishlistItemSchema);