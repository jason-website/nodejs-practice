const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// it registers a middleware, this function in the end just yields us such a middleware function.
app.use(bodyParser.urlencoded({extended: false}))//should be able to parse non-default features

//use to allow us to add a new middle ware function. It accepts an array of so-called request handlers here.
//The function inside it will be executed for every incoming request.
//Can not rename these three arguments.
//Next is a function will be executed to allow the request to travel on to the next mildWare.
app.use('/add-product',(req, res, next)=>{
    console.log('In the another middleWare');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')//allow us to attach a body, default header is text/html
});
app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req, res, next)=>{
    console.log('In the another middleWare');
    res.send('<h1>Hello From Express!</h1>')//allow us to attach a body, default header is text/html
});

app.listen(3000);
