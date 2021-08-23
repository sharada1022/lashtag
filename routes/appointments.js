var express = require('express');
var router = express.Router();
var db = require("../model/helper");

/* GET appointments . */
router.get("/appointments", async (req, res) => {
    db("SELECT * FROM appointments")
      .then((results) => {
        res.send(results.data);
      })
      .catch((err) => res.status(500).send(err));
  });

  router.post("/appointments", async (req, res) => {
    let { date, month, time } = req.body;
    let sql = `INSERT INTO appointments (date, month, time) VALUES ('${date}', '${month}', '${time}')`;
    try {
      await db(sql);
      let results = await db("SELECT * FROM appointments");
      // let lashtag = results.data;
      res.status(201).send(results.data);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
  module.exports = router;
  