// routes/colaboradores.routes.js
const express = require("express");
const router = express.Router();
const {
  getColaboradores,
  addColaborador,
} = require("../controllers/colaboradores.controller");

router.get("/", getColaboradores);
router.post("/", addColaborador);

module.exports = router;
