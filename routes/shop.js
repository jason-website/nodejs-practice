const express = require('express');
const router = express.Router();
const path = require('path');

const shopController = require('../controllers/shop');

router.get('/', shopController.getProducts);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getProducts);
router.get('/checkout', shopController.getProducts);

module.exports = router;
