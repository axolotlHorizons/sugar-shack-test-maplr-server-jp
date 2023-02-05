'use strict';

const db = require('../helpers/db');

const getProducts = (type) => {
    const query = type === undefined ? false : (products) => { return products.type === type };
    return db.getProductsCollection().findAll(query);
}

const getProductById = (id) => {
    return db.getProductsCollection().findOne(id);
}

const updateStock = (orderDetail) => {
    return db.getProductsCollection().updateStock(orderDetail);
}

module.exports = {
    getProducts,
    getProductById,
    updateStock
};