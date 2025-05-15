const express = require("express");
const router = express.Router();
const {
  getEmpresas,
  addEmpresa,
  actualizarEmpresa,
  eliminarEmpresa,
} = require("../controllers/empresas.controller");

router.get("/", getEmpresas);
router.post("/", addEmpresa);
router.put("/:id", actualizarEmpresa);
router.delete("/:id", eliminarEmpresa);

module.exports = router;
