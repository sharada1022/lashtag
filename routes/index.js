var express = require("express");
var router = express.Router();
var db = require("../model/helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.get("/lashtag", async (req, res) => {
  db("SELECT * FROM clients ORDER BY  id")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/lashtag", async (req, res) => {
  let { name, email, number } = req.body;
  let sql = `INSERT INTO clients (name, email, number) VALUES ('${name}', '${email}', '${number}')`;
  try {
    await db(sql);
    let results = await db("SELECT * FROM clients");
    let lashtag = results.data;
    res.status(201).send(lashtag);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put("lashtag/", async (req, res) => {
  let lashtagId = req.params.lashtag_id;
  try {
    let results = await db(`SELECT * FROM clients WHERE id = ${lashtagId}`);
    if (results.data.length === 0) {
      res.status(404).send({ error: "lashes have fallen" });
    } else {
      let { name, email, number } = req.body;
      let sql = `UPDATE client SET name = '${name}', email = '${email}', number = ${number} WHERE id = ${lashtagID}`;

      await db(sql);
      let results = await db(`SELECT * FROM clients`);
      let lashtag = results.data;
      res.send(lashtag);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/lashtag/:lashtag_id", async (res, req) => {
  let lashtagId = req.params.lashtag_id;
  try {
    let results = await db(`SELECT * FROM clients WHERE id = ${lashtagId}`);
    if (results.data.length === 0) {
      res.status(404).send({ error: "lashes have fallen" });
    } else {
      let results = await db(`DELETE FROM clients WHERE id = ${lashtagId}`);

      results = await db(`SELECT * FROM clients`);
      let lashtag = results.data;
      res.send(lashtag);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
