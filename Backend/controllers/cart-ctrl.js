const { response } = require('express');
const Cart = require('../models/cart')

viewCart = async (req, res) => {
   const result = await Cart.find({});
    console.log(result);
    res.status(200).send(result);
}

addToCart = async (req, res) => {
    const body = req.body
    

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'NEED TO ADD SOMETHING TO CART',
        })
    }

    const prod=await Cart.findOne({product_name: body.product_name})
    if(prod!=null)
    {
        
        Cart.updateOne({product_name: body.product_name},{$inc: {quantity: 1}},
            function (err) {
                if (err) return handleError(err)
            else return res.status(200);
            }
            );

        const quant_new=await Cart.find({product_name: body.product_name}).distinct('quantity');
        console.log(quant_new);
        return;
        
    }
    const addcart = new Cart(body)

    if (!addcart) {
        return res.status(400).json({ success: false, error: err })
    }

    addcart
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: addcart._id,
                message: 'CART ADDED!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'CART NOT ADDED!',
            })
        })


}

removeFromCart = async (req, res) => {
    //res.send('Item removed');
    await Cart.findOneAndDelete({ _id: req.params.id }, (err, dataa) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!dataa) {
            return res
                .status(404)
                .json({ success: false, error: 'ITEM NOT FOUND' })
        }

        return res.status(200).json({ success: true, data: dataa })
    }).catch(err => console.log(err))
}


module.exports = {
    viewCart,
    addToCart,
    removeFromCart,
}