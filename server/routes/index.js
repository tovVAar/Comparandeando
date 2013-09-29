/*jslint node: true */
'use strict';

var mongoose = require('mongoose'),
    db_link  = 'mongodb://localhost/Comparandeando',
    db       = mongoose.createConnection(db_link);

var product_schema = require('models/product')
   ,Product = db.model('Product', product_schema);


//Demo function
exports.awesomeThings = function(req, res) {
    res.json([
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ]);
};

//Get all products
exports.getAllProducts = function(req, res, next){
  Product.find(gotProducts);
  function gotProducts (err, productos) {
    if (err) {
      console.log('Error in getAllProducts'+err)
      return next()
    }
    return res.json(productos);
  }
}

//Get a product
exports.getProduct = function(req, res, next){
  var id=req.params.id;
  Product.findById(id, gotProducts);
  function gotProducts (err, productos) {
    if (err) {
      console.log('Error in getProduct: '+err)
      return next()
    }

    return res.json( productos )
  }    
};


exports.setProduct = function(req, res){
    res.send('setProduct');
};


//Delete a product
exports.removeProduct = function(req, res){
    res.send('removeProduct');
};

//Create a product
exports.newProduct = function(req, res){
    res.send('newProduct');
};

