const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');


const app = express();
// it registers a middleware, this function in the end just yields us such a middleware function.
app.use(bodyParser.urlencoded({extended: false}))//should be able to parse non-default features
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000);
