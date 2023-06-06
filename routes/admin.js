//The route that handles the creation of products which the admin of the shop can do.
const express = require('express');
//This router is like a mini express app tied to the other express app or pluggable into the other express app
const router = express.Router();

router.get('/add-product',(req, res, next)=>{
    console.log('In the another middleWare');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')//allow us to attach a body, default header is text/html
});
router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
