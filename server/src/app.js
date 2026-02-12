require('dotenv').config();
const express = require("express");

// DB Routes
const productRoutes = require('./routes/products.js');

const port = process.env.PORT || 3000;

const app = express();

// Parse incoming JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/products', productRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Something went wrong",
  });
});

//Server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});