//The route that handles the creation of products which the admin of the shop can do.
const express = require('express');
//This router is like a mini express app tied to the other express app or pluggable into the other express app
const router = express.Router();

const path = require('path');
const rootDir = require('../util/path');
const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
});
router.post('/add-product',(req, res, next)=>{
    products.push({title:req.body.title})
    res.redirect('/');
});

module.exports.routers = router;
module.exports.products = products;
