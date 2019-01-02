var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var drinksSchema =  new Schema ( {

    brand: String,
    model: String,
    country: String,
    number: Number,
    alkohol: String,
    volume: String,
    price: Number,
    comment: String
});

module.exports = mongoose.model('Drinks', drinksSchema); // exportera Schemat ut i mappstrukturen