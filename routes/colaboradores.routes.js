// routes/colaboradores.routes.js
const express = require("express");
const router = express.Router();
const {
  getColaboradores,
  addColaborador,
  actualizarColaborador,
  eliminarColaborador,
} = require("../controllers/colaboradores.controller");

router.get("/", getColaboradores);
router.post("/", addColaborador);
router.delete("/colaboradores/:id", eliminarColaborador);
router.put("/colaboradores/:id", actualizarColaborador);

module.exports = router;
