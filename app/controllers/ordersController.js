'use strict';
const ordersModel = require("../models/ordersModel");
const cartsModel = require("../models/cartsModel");


// Insert order then remove product from the current Cart
const insertOrder = async (req, res) => {
    const data = req.body;
    return ordersModel.insertOrder(data).then(success => {
        return cartsModel.removeProductsToCart().then(success => {
            return res.status(202).send();
        });
    }).catch(err => {
        console.error('Error retreving products', err);
        return res.status(500).json({err});
    });
}

module.exports = {
    insertOrder,
};