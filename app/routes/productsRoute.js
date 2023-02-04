'use strict';

const router = require('express').Router({caseSensitive: true});
const productsController = require("../controllers/productsController");

/**
 * Retrieve a list of products, can be filtered by a "type" query parameter
 */
router.get('/',
    productsController.getProducts);

/**
 * Retrieve a specific product by ID
 */
router.get('/:id',
    productsController.getProductsById);

module.exports = router;