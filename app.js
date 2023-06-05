const express = require('express');
const app = express();
//use to allow us to add a new middle ware function. It accepts an array of so-called request handlers here.
//The function inside it will be executed for every incoming request.
//Can not rename these three arguments.
//Next is a function will be executed to allow the request to travel on to the next mildWare.
app.use('/add-product',(req, res, next)=>{
    console.log('In the another middleWare');
    res.send('<h1>The "Add Product" Page</h1>')//allow us to attach a body, default header is text/html
});
app.use('/',(req, res, next)=>{
    console.log('In the another middleWare');
    res.send('<h1>Hello From Express!</h1>')//allow us to attach a body, default header is text/html
});

app.listen(3000);
