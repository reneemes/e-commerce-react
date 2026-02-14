const index = require('../services/productsService.js');

async function getAllProducts(req, res) {
  try {
    const products = await index();
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve products.' });
  }
}

module.exports = getAllProducts;