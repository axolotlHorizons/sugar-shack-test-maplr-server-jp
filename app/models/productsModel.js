'use strict';

const db = require('../helpers/db');

const getProducts = (type) => {
    const query = type === undefined ? false : (products) => { return products.type === type };
    return db.getProductsCollection().findAll(query);
}

const getProductById = (id) => {
    return db.getProductsCollection().findOne(id);
}

module.exports = {
    getProducts,
    getProductById
};