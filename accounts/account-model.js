const db = require("../data/dbConfig");

function get() {
  return db("accounts");
}

function getById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

module.exports = {
  get,
  getById
};
