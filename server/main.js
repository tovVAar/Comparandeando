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
app.post('/api/product_new', routes.newProduct);
app.get('/api/all_products', routes.getAllProducts)

app.get('/api/place/:id', routes.getPlace);
app.post('/api/place/:id', routes.setPlace);
app.get('/api/place_delete/:id', routes.removePlace);
app.post('/api/place_new', routes.newPlace);
app.get('/api/all_places', routes.getAllPlaces)


app.use(function (req, res) {
    res.json({'ok': false, 'status': '404'});
});

module.exports = app;
