const express = require('express')

const CartCtrl = require('../controllers/cart-ctrl')

const router = express.Router()

router.post('/add_to_cart', CartCtrl.addToCart)
router.get('/view_cart', CartCtrl.viewCart)
router.delete('/remove_from_cart/:id', CartCtrl.removeFromCart)

module.exports = router 