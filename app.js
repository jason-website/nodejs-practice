const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const errorController = require('./controllers/error');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// it registers a middleware, this function in the end just yields us such a middleware function.
app.use(bodyParser.urlencoded({extended: false}))//should be able to parse non-default features

app.use(express.static(path.join(__dirname, 'public')))//it serveres static files. we can execute this function. we just have to pass in a path to the folder
// which we want to serve statically. so basically a folder which we want to grant access to

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: '/'});
})

app.listen(3000);
