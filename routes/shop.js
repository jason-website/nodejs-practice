const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello From Express!</h1>')//allow us to attach a body, default header is text/html
});

module.exports = router;
