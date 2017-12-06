var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Wishlist = mongoose.model('Wishlist');
let WishlistItem = mongoose.model('WishlistItem');

/* GET home page. */
//all wishlists but set to [0] to get one, replace with user later 
router.get('/API/wishlists/', function(req,res,next){
  let query = Wishlist.find().populate('wishlistItems');
  query.exec(function (err, wishlist){
    if (err) return next(err);
    res.json(wishlist);
  });
});

//puts a wishlist in db
router.post('/API/wishlists/', function(req, res, next){
  let wishlist = new Wishlist({name: req.body.name});
  wishlist.save(function(err, post){
    if(err) {
      return next(err);
    }
    res.json(wishlist);
  });
});

router.param('wishlist', function(req,res, next, id){
  let query = Wishlist.findById(id).populate('wishlistItems');
  query.exec(function (err, wishlist){
    if (err) {
      return next(err);
    }
    if (!wishlist){
      return next(new Error('not found ' + id));
    }
    req.wishlist = wishlist;
    return next();
  });
});

//get one specific wishlist   (later user)
router.get('/API/wishlist/:wishlist', function(req,res){
  res.json(req.wishlist);
});

router.delete('/API/wishlist/:wishlist', function(req,res, next){
WishlistItem.remove({ _id: {$in: req.wishlist.wishlistItems}},
  function (err) {
    if(err) return next(err);
    req.wishlist.remove(function(err){
      if (err) { return next(err); }
      res.json(req.wishlist);
  });
  })
});



router.post('/API/wishlist/:wishlist/wishlistItems', function(req, res, next){
  let wishlistItem = new WishlistItem(req.body);
  wishlistItem.save(function(err, wishlistItem){
    if(err) {
      return next(err);
    }
    req.wishlist.wishlistItems.push(wishlistItem);
    req.wishlist.save(function(err, rec){
      if(err) {
        return next(err);
      }
    res.json(wishlistItem);
    });
  });
});







module.exports = router;
