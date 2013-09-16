var Schema = require('mongoose').Schema;

var product_schema = new Schema({
  name          : String,
  description   : String,
  price         : String
});

module.exports = product_schema;
