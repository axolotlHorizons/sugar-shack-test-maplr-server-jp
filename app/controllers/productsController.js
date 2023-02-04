'use strict';
const productsModel = require("../models/productsModel");

const getProducts = async (req, res) => {
    const {type} = req.query;
    return productsModel.getProducts(type).then(products => {
        return res.status(200).json([...products]);
    }).catch(err => {
        console.error('Error retreving products', err);
        return res.status(500).json({err});
    });
}

const getProductsById = async (req, res) => {
    const {id} = req.params;
    return productsModel.getProductById(id).then(products => {
        return res.status(200).json({...products});
    }).catch(err => {
        console.error('Error retreving products', err);
        return res.status(500).json({err});
    });
}

module.exports = {
    getProducts,
    getProductsById
};