const express = require("express");
const router = express.Router();
const {
  getEmpresas,
  addEmpresa,
} = require("../controllers/empresas.controller");

router.get("/", getEmpresas);
router.post("/", addEmpresa);

module.exports = router;
