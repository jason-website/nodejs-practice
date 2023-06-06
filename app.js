const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');


const app = express();
// it registers a middleware, this function in the end just yields us such a middleware function.
app.use(bodyParser.urlencoded({extended: false}))//should be able to parse non-default features

app.use(express.static(path.join(__dirname,'public')))//it serveres static files. we can execute this function. we just have to pass in a path to the folder
// which we want to serve statically. so basically a folder which we want to grant access to

app.use('/admin', adminData.routers);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
