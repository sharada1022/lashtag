var express = require('express');
var router = express.Router();
var db = require("../model/helper");

/* GET users . */
router.get("/users", async (req, res) => {
  db("SELECT * FROM users")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/users", async (req, res) => {
  let { username, email, password } = req.body;
  let sql = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
  try {
    await db(sql);
    // let results = await db("SELECT * FROM users");
    // let lashtag = results.data;
    res.status(201).send("User successfully added !");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
