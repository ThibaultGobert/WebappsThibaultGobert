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
    res.json(wishlist);
  });
});

router.post('/API/wishlist/', function(req, res, next){
  let wishlist = new Wishlist({name: req.body.name, wishlistItems: req.body.wishlistItems});
  wishlist.save(function(err, post){
    if(err) {
      return next(err);
    }
    res.json(wishlist);
  });
});



module.exports = router;
