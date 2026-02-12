require('dotenv').config();
const express = require("express");

// DB Routes
const productRoutes = require('./routes/products.js');

const port = process.env.PORT || 3000;

const app = express();

// Parse incoming JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoutes);

//Server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});