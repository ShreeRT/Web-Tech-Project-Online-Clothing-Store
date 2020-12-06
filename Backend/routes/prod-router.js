const express = require('express')

const ProductCtrl = require('../controllers/prod-ctrl')

const router = express.Router()

router.post('/product', ProductCtrl.createProduct)
router.get('/products/:category', ProductCtrl.getProductsByCategory)
router.get('/products', ProductCtrl.getProducts)

module.exports = router