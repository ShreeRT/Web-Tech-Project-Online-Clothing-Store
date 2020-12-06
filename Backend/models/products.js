const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Product= new Schema({
    product_name:{
        type:String
    },
    
    category:{
        type: String
    },

    image:{
        type:String
    },

    price:{
        type: Number
    }
    
});

module.exports = mongoose.model('products', Product);

