const { db } = require("../firebase/firebase.config");

// GET empresas
const getEmpresas = async (req, res) => {
  try {
    const snapshot = await db.collection("empresas").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST nueva empresa
const addEmpresa = async (req, res) => {
  try {
    const nuevaEmpresa = req.body;
    const docRef = await db.collection("empresas").add(nuevaEmpresa);
    res.status(201).json({ id: docRef.id, ...nuevaEmpresa });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getEmpresas,
  addEmpresa,
};
