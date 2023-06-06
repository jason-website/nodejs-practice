const path = require('path');
//process.mainModule will refer to the main module that started your application, basically to the module of app.js
//filename: which file this mainModule was spun up
//this gives us the path to the file that is responsible for the fact that our application is running
//this file name is what we put into dir name to get a path to that directory
module.exports = path.dirname(process.mainModule.filename);
