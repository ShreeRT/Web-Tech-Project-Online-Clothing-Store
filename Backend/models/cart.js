const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Cart= new Schema({
    product_name:{
        type:String
    },
    image:{
        type:String
    },
    
    category:{
        type: String,
    },
    
    quantity:{
        type: Number,
    },

    price:{
        type: Number,
    }
    
});
module.exports = mongoose.model('cart', Cart);