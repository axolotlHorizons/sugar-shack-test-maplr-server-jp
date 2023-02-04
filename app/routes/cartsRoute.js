'use strict';

const router = require('express').Router({caseSensitive: true});
const cartsController = require("../controllers/cartsController");
const validationMiddleware = require("../middleware/validationMiddleware");
const bodyParser = require("body-parser");

/**
 * Get the current cart
 */
router.get('/',
    cartsController.getCart);

/**
 * Add a product to the current Cart
 */
router.put('/',
    bodyParser.json(),
    validationMiddleware.validateJsonBody('../schemas/product.json'),
    cartsController.addToCart);

/**
 * remove products from the current Cart
 */
router.delete('/',
    cartsController.removeToCart);

module.exports = router;