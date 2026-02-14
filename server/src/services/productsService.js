const connection = require('../db.js');

async function index() {
  const [result] = await connection.promise().query(
    `SELECT *
    FROM products;
    `
  );
  return result;
}

module.exports = index;