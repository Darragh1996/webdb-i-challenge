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

function updateAccount({ id, name, budget }) {
  return db("accounts")
    .where({ id })
    .update({ name, budget });
}

function deleteAccount(id) {
  return db("accounts")
    .where({ id })
    .del();
}

module.exports = {
  get,
  getById,
  insertNewAccount,
  updateAccount,
  deleteAccount
};
