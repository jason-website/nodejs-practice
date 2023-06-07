const fs = require('fs');
const path = require('path');
const e = require("express");

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
const getProductsFromFIle = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFIle(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFIle(cb);
    }
}
