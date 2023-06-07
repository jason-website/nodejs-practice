//The route that handles the creation of products which the admin of the shop can do.
const express = require('express');
//This router is like a mini express app tied to the other express app or pluggable into the other express app
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products');


router.get('/add-product', productsController.getAddProduct);
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
