const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const PORT = 4000;

const db = require('./db')
const productRouter = require('./routes/prod-router');
const cartRouter = require('./routes/cart-router');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/', productRouter)
app.use('/', cartRouter)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

