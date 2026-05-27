import { Router } from "express";
import { cadastrar, login, atualizar, deletar } from "../controllers/usuariosController.js";
import { autenticar } from "../middlewares/auth.js";

const router = Router();

router.post("/usuarios", cadastrar);
router.post("/login", login);
router.put("/usuarios/:id", autenticar, atualizar);
router.delete("/usuarios/:id", autenticar, deletar);

export default router;