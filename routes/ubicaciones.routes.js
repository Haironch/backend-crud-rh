// routes/ubicaciones.routes.js
const express = require("express");
const router = express.Router();

const {
  getPaises,
  addPais,
  getDepartamentos,
  addDepartamento,
  getMunicipios,
  addMunicipio,
  getAllDepartamentos,
  getAllMunicipios,
} = require("../controllers/ubicaciones.controller");

// Países
router.get("/paises", getPaises);
router.post("/paises", addPais);

// Departamentos
router.get("/departamentos", getDepartamentos); // ?paisId=...
router.post("/departamentos", addDepartamento);

// Municipios
router.get("/municipios", getMunicipios); // ?departamentoId=...
router.post("/municipios", addMunicipio);

router.get("/departamentos-todos", getAllDepartamentos);
router.get("/municipios-todos", getAllMunicipios);

module.exports = router;
