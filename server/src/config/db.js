const pool = require('../db/pool');

module.exports = {
  query: (text, params) => pool.query(text, params),
};
