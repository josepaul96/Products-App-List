const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    productId: Number,
    productName:String,
    productCode: String,
    releaseDate: String,
    description: String,
    price: Number,
    starRating: Number,
    imageUrl:String

})

module.exports= mongoose.model('products', productSchema, 'products');
