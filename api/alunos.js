const express = require("express");
const router = express.Router();

const alunos = [
  { id: 1, name: "José da Silva", age: 28, location: "Boa Vista/RR" },
  { id: 2, name: "Maria Auxiliadora", age: 45, location: "Muacajaí/RR" },
  { id: 3, name: "Mario de Andrade", age: 22, location: "Baliza/RR" },
];

/**
 * GET alunos list
 */
router.get("/", function (req, res) {
  try {
    res.json({
      status: 200,
      message: "Alunos list data successful",
      data: alunos,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ message: "Alunos list data failed" });
  }
});

module.exports = router;
