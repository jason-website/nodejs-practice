//The route that handles the creation of products which the admin of the shop can do.
const express = require('express');
//This router is like a mini express app tied to the other express app or pluggable into the other express app
const router = express.Router();

const path = require('path');

router.get('/add-product',(req, res, next)=>{
res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});
router.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
