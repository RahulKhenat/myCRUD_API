const express = require("express");
const vikas = require("../db/db");
const db = require("../db/db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    let results = await db.get();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});




module.exports = router;
