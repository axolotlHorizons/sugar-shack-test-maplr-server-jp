'use strict';
const cartsModel = require("../models/cartsModel");


const getCart = async (req, res) => {
    return cartsModel.getCurrentCart().then(cart => {
        return res.status(200).json([...cart]);
    }).catch(err => {
        console.error('Error on add products to the current Cart', err);
        return res.status(500).json({err});
    });
}

const addToCart = async (req, res) => {
    const data = req.body;
    return cartsModel.addProductToCart(data).then(success => {
        return res.status(202).send();
    }).catch(err => {
        console.error('Error on add products to the current Cart', err);
        return res.status(500).json({err});
    });
}

const removeToCart = async (req, res) => {
    return cartsModel.removeProductsToCart().then(success => {
        return res.status(204).send();
    }).catch(err => {
        console.error('Error on add products to the current Cart', err);
        return res.status(500).json({err});
    });
}

module.exports = {
    getCart,
    addToCart,
    removeToCart
};