require('dotenv').config();
const express = require("express");

// DB Routes

const port = process.env.PORT || 3000;

const app = express();

// Parse incoming JSON & form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});