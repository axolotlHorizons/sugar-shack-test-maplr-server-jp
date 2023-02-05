'use strict';
const ordersModel = require("../models/ordersModel");
const cartsModel = require("../models/cartsModel");
const productsModel = require("../models/productsModel");


// Insert order then remove product from the current Cart
const insertOrder = async (req, res) => {
    const data = req.body;
    try {
        await ordersModel.insertOrder(data);
        await cartsModel.removeProductsToCart();
        await productsModel.updateStock(data);
        return res.status(202).send();
    }
    catch (err) {
        console.error('Error retreving products', err);
        return res.status(500).json({err});
    }
}

module.exports = {
    insertOrder,
};