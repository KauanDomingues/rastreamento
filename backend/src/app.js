import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usuariosRoutes from "./routes/usuarios.js";
import encomendasRoutes from "./routes/encomendas.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(usuariosRoutes);
app.use(encomendasRoutes);

export default app;