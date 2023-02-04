const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const productsRoutes = require('./app/routes/productsRoute');
const cartsRoutes = require('./app/routes/cartsRoute');
const ordersRoutes = require('./app/routes/ordersRoute');
const db = require('./app/helpers/db');

const app = express();
const port = process.env.PORT || 8000;

// Initialize the connection with fakebase
db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/products', productsRoutes);
app.use('/carts', cartsRoutes);
app.use('/orders', ordersRoutes);

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});