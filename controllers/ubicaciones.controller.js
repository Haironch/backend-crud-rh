// controllers/ubicaciones.controller.js
const { db } = require("../firebase/firebase.config");

// Obtener lista de países
const getPaises = async (req, res) => {
  try {
    const snapshot = await db.collection("paises").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar un país
const addPais = async (req, res) => {
  try {
    const nuevo = req.body; // Ejemplo: { nombre: "Guatemala" }
    const docRef = await db.collection("paises").add(nuevo);
    res.status(201).json({ id: docRef.id, ...nuevo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener departamentos por paisId
const getDepartamentos = async (req, res) => {
  try {
    const { paisId } = req.query;
    const snapshot = await db
      .collection("departamentos")
      .where("paisId", "==", paisId)
      .get();

    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar un nuevo departamento
const addDepartamento = async (req, res) => {
  try {
    const nuevo = req.body; // { nombre: "Guatemala", paisId: "id_pais" }
    const docRef = await db.collection("departamentos").add(nuevo);
    res.status(201).json({ id: docRef.id, ...nuevo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener municipios por departamentoId
const getMunicipios = async (req, res) => {
  try {
    const { departamentoId } = req.query;
    const snapshot = await db
      .collection("municipios")
      .where("departamentoId", "==", departamentoId)
      .get();

    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar nuevo municipio
const addMunicipio = async (req, res) => {
  try {
    const nuevo = req.body; // { nombre: "Mixco", departamentoId: "..." }
    const docRef = await db.collection("municipios").add(nuevo);
    res.status(201).json({ id: docRef.id, ...nuevo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllDepartamentos = async (req, res) => {
  try {
    const snapshot = await db.collection("departamentos").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMunicipios = async (req, res) => {
  try {
    const snapshot = await db.collection("municipios").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPaises,
  addPais,
  getDepartamentos,
  addDepartamento,
  getMunicipios,
  addMunicipio,
  getAllDepartamentos,
  getAllMunicipios,
};
