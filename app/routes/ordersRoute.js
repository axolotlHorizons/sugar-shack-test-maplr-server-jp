'use strict';

const router = require('express').Router({caseSensitive: true});
const ordersController = require("../controllers/ordersController");
const validationMiddleware = require("../middleware/validationMiddleware");
const bodyParser = require("body-parser");

/**
 * Insert the order and clean the current cart
 */
router.post('/',
    bodyParser.json(),
    validationMiddleware.validateJsonBody('../schemas/order.json'),
    ordersController.insertOrder);


module.exports = router;