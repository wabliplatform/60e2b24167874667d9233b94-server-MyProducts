
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
Underscoreid:String , 

image:String , 

title:String , 

price:String 


})

module.exports = {
  Product : mongoose.model('Product', productSchema),
}

