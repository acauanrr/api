const express = require("express");
const router = express.Router();

// From json file
const alunosFile = require("../files/alunos");

/**
 * GET alunos list
 */
router.get("/", function (req, res) {
  try {
    res.json(alunosFile);
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Alunos list data failed" });
  }
});

module.exports = router;
