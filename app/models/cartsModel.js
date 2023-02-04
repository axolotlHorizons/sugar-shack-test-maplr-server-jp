'use strict';

const db = require('../helpers/db');

const getCurrentCart = () => {
    return db.getCartsCollection().findOne();
}

const addProductToCart = (product) => {
    return db.getCartsCollection().add(product);
}

const removeProductsToCart = () => {
    return db.getCartsCollection().removeAll();
}

module.exports = {
    addProductToCart,
    getCurrentCart,
    removeProductsToCart
};