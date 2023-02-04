'use strict';
const faker = require('@faker-js/faker');

const createRandomProduct = () => {
    faker.faker.locale = 'fr';
    return {
        id: faker.faker.datatype.uuid(),
        description: faker.faker.commerce.productDescription(),
        image: faker.faker.helpers.arrayElement(["https://www.ebrunch.fr/1407/product.jpg", "https://images.prismic.io/la-fourche/d96bbf03-d64c-478e-8f62-dce006a6621d_Sirop+d%27%C3%A9rable+artisanal.jpg?auto=compress,format", "https://www.jasmino.ca/wp-content/uploads/2021/11/jasmino_siroperablecanne.png", "https://nutrisport-performances.com/boutique/11872-thickbox_default/sirop-dessert-sirop-d-erable-0kcal-walden-farms.jpg", "https://www.lebiomonde.net/728-large_default/sirop-d-erable-375-ml.jpg", "https://old.famillevacher.fr/78-large_default/sirop-d-erable-le-quebecois-250ml.jpg"]),
        name: faker.faker.commerce.productName(),
        price: Math.random() * (20 - 6 + 1) + 6,
        stock: parseInt(Math.random() * (49 - 1 + 1) + 1),
        type: faker.faker.helpers.arrayElement(['AMBER', 'DARK', 'CLEAN'])
    }
};

module.exports = {
    createRandomProduct
};