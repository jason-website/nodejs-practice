const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    //__dirname this is global variable which simply holds the absolute path  on our operating system.
    //path.join() 会自动识别是哪个系统然后自动生成对应的路径
    //../go up one level
res.sendFile(path.join(__dirname,'../','views','shop.html'))//send file to the user
});

module.exports = router;
