'use strict';
const productsFactory = require('./productsFactory');


const ORDERS = [], NBFAKEPRODUCTS = 10; // Change this number to generate more or less fake data
let CARTS = [], PRODUCTS = [];


/**
 * I use a open source library "fakerjs" -> https://github.com/faker-js/faker
 *  to generate fake data and then I simulate a database like MongoDB
 */
const connect = () => {
    // Init our fake database with some random data
    Array.from({ length: NBFAKEPRODUCTS }).forEach(() => {
        PRODUCTS.push(productsFactory.createRandomProduct());
    });
}

// Simulate collections references like Mongodb
const getProductsCollection = () => {
    return {
        findAll: async (filter) => {
            const products = await PRODUCTS; // Useless Await in this case, is just for simulate an asynchrone method
            if (filter) {
                return products.filter(filter);
            }
            return products;
        },
        findOne: async (id) => {
            const product = await PRODUCTS.find(item => item.id === id); // Useless Await in this case, is just for simulate an asynchrone method
            return product;
        },
        updateStock: async (orderDetails) => {
            let tmpListProduct = [...PRODUCTS];
            orderDetails.products.forEach(orderProduct => {
               let indexProduct = PRODUCTS.findIndex(product => product.id === orderProduct.id);
               tmpListProduct[indexProduct].stock -= orderProduct.qty;
            });
            PRODUCTS = await [...tmpListProduct]; // Useless Await in this case, is just for simulate an asynchrone method
        }
    }
};

const getCartsCollection = () => {
    return {
        findOne: async () => {
            const carts = await CARTS; // Useless Await in this case, is just for simulate an asynchrone method
            return carts;
        },
        add: async (product) => {
            let tmpCart = CARTS, isNew = false;
            tmpCart.forEach((item, index) => { // I check if the product is already in the cart, and change the item if it is
                if (item.id === product.id) {
                    if (item.stock-1 === 0) {
                        throw new Error('empty-stock');
                    }
                    isNew = true;
                    item.stock--;
                    item.qty++;
                    tmpCart[index] = item;
                }
            });
            if (!isNew) { // If the product is not found in the cart, I added it and assign a new stock and a new quantity
                tmpCart.push({...product, qty: 1, stock: product.stock--});
            }
            CARTS = await [...tmpCart]; // Useless Await in this case, is just for simulate an asynchrone method
            return true;
        },
        removeAll: async () => {
            CARTS = await []; // Useless Await in this case, is just for simulate an asynchrone method
            return true;
        }
    }
};

const getOrderCollection = () => {
    return {
        add: async (order) => {
            await ORDERS.push(order); // Useless Await in this case, is just for simulate an asynchrone method
            return true;
        },
    }
};

module.exports = {
    connect,
    getProductsCollection,
    getCartsCollection,
    getOrderCollection
};