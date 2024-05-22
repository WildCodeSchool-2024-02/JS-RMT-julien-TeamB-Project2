const express = require("express");

const games = require("../database/data");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Route to get a list of items
router.get("/games", (req, res) => {
  res.status(200).json(games);
});
/* ************************************************************************* */

module.exports = router;
