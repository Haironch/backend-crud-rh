// controllers/colaboradores.controller.js
const { db } = require("../firebase/firebase.config");

const getColaboradores = async (req, res) => {
  try {
    const snapshot = await db.collection("colaboradores").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addColaborador = async (req, res) => {
  try {
    const nuevo = req.body;
    const docRef = await db.collection("colaboradores").add(nuevo);
    res.status(201).json({ id: docRef.id, ...nuevo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const eliminarColaborador = async (req, res) => {
  try {
    const { id } = req.params;
    await db.collection("colaboradores").doc(id).delete();
    res.status(200).json({ message: "Colaborador eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const actualizarColaborador = async (req, res) => {
  try {
    const { id } = req.params;
    const nuevo = req.body;
    await db.collection("colaboradores").doc(id).update(nuevo);
    res.status(200).json({ message: "Colaborador actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getColaboradores,
  addColaborador,
  eliminarColaborador,
  actualizarColaborador,
};
