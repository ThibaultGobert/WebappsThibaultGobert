var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Wishlist = mongoose.model('Wishlist');
let WishlistItem = mongoose.model('WishlistItem');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/API/wishlist/', function(req,res,next){
  Wishlist.find(function(err,wishlist){
    if(err){
      return next(err);
    }
    res.json(Wishlist);
  });
});

module.exports = router;
