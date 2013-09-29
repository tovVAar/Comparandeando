/*jslint node: true */
'use strict';
var express = require('express'),
    routes = require('./routes'),
    app = express();

app.use(express.bodyParser());

app.get('/api/awesomeThings', routes.awesomeThings);
app.get('/api/product/:id', routes.getProduct);
app.post('/api/product/:id', routes.setProduct);
app.get('/api/product_delete/:id', routes.removeProduct);
app.get('/api/product_new', routes.newProduct);
app.get('/api/all_products', routes.getAllProducts)
app.use(function (req, res) {
    res.json({'ok': false, 'status': '404'});
});

module.exports = app;
