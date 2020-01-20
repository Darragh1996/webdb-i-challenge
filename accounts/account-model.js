const db = require("../data/dbConfig");

function get() {
  return db("accounts");
}

function getById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

function insertNewAccount({ name, budget }) {
  return db("accounts").insert({ name, budget });
}

module.exports = {
  get,
  getById,
  insertNewAccount
};
