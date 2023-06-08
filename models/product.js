const fs = require('fs');
const path = require('path');
const e = require("express");
const Cart = require('./carts');

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
    constructor(id, title, imageUrl, price, description) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductsFromFIle(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updateProducts = [...products];
                updateProducts[existingProductIndex] = this;
                fs.writeFile(p, JSON.stringify(updateProducts), (err) => {
                    console.log(err);
                })
            } else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                })
            }
        })
    }

    static deleteById(id) {
        getProductsFromFIle(products => {
            const product = products.find(prod => prod.id === id);
            const updatedProducts = products.filter(p => p.id !== id);
            fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                if (!err) {
                    Cart.deleteProduct(id, product.price);
                }
            })
        });
    }


    static fetchAll(cb) {
        getProductsFromFIle(cb);
    }

    static findById(id, cb) {
        getProductsFromFIle(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
}
