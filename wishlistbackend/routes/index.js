var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

let Wishlist = mongoose.model('Wishlist');
let WishlistItem = mongoose.model('WishlistItem');

let auth = jwt({secret: process.env.WISHLIST_BACKEND_SECRET, userProperty: 'payload'});

/* GET home page. */
router.get('/API/wishlists/', auth, function(req,res,next){
  let query = Wishlist.find().populate('wishlistItems');
  query.exec(function (err, wishlist){
    if (err) return next(err);
    res.json(wishlist);
  });
});

router.post('/API/wishlists/', auth, function(req, res, next){
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
