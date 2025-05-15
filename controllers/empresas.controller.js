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

const actualizarEmpresa = async (req, res) => {
  const { id } = req.params;
  const datos = req.body;
  await db.collection("empresas").doc(id).update(datos);
  res.status(200).json({ message: "Empresa actualizada correctamente" });
};

const eliminarEmpresa = async (req, res) => {
  const { id } = req.params;
  await db.collection("empresas").doc(id).delete();
  res.status(200).json({ message: "Empresa eliminada correctamente" });
};

module.exports = {
  getEmpresas,
  addEmpresa,
  actualizarEmpresa,
  eliminarEmpresa,
};
