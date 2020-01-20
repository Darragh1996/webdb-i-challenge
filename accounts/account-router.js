const express = require("express");
const Accounts = require("./account-model");

const router = express.Router();

router.get("/", (req, res) => {
  Accounts.get()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .then(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
