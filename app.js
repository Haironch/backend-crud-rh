const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Necesario para que funcione req.body

// Rutas
const colaboradoresRoutes = require("./routes/colaboradores.routes");
const ubicacionesRoutes = require("./routes/ubicaciones.routes");
const empresasRoutes = require("./routes/empresas.routes");

app.use("/api/colaboradores", colaboradoresRoutes);
app.use("/api/ubicaciones", ubicacionesRoutes); // ✅ Muy importante
app.use("/api/empresas", empresasRoutes);

app.get("/", (req, res) => {
  res.send("API de Recursos Humanos funcionando...");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
