/*jslint node: true */
'use strict';

var mongoose = require('mongoose'),
    db_link  = 'mongodb://localhost/Comparandeando',
    db       = mongoose.createConnection(db_link);

var producto_schema = require('models/product')
//   ,Product = db.model('Product', product_schema);



exports.awesomeThings = function(req, res) {
    res.json([
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ]);
};

exports.getProduct = function(req, res){
    res.send('getProduct');
};

exports.setProduct = function(req, res){
    res.send('setProduct');
};

exports.removeProduct = function(req, res){
    res.send('removeProduct');
};

exports.newProduct = function(req, res){
    res.send('newProduct');
};


exports.index = function (req, res) {

  Product.find(gotProducts);
  function gotProducts (err, products) {
    if (err) {
      console.log(err)
      return next();
    }

   return res.json(['index', {'title': 'Lista de Productos', 'products': products}])
  }
}
