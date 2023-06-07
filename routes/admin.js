//The route that handles the creation of products which the admin of the shop can do.
const express = require('express');
//This router is like a mini express app tied to the other express app or pluggable into the other express app
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');
const adminController = require('../controllers/admin');


router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.post('/add-product', adminController.postAddProduct);
router.get('/edit-product/:productId', adminController.getEditProduct);

module.exports = router;
