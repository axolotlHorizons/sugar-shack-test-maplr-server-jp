'use strict';

const db = require('../helpers/db');

const insertOrder = (order) => {
    return db.getOrderCollection().add(order);
}

module.exports = {
    insertOrder
};