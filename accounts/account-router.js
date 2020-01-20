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

router.get("/:id", (req, res) => {
  Accounts.getById(req.params.id)
    .then(account => {
      res.status(200).json(account);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res) => {
  Accounts.insertNewAccount(req.body)
    .then(id => {
      res.status(200).json(id);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
