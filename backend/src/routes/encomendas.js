import { Router } from "express";
import { listar, adicionar, deletar } from "../controllers/encomendasController.js";
import { autenticar } from "../middlewares/auth.js";

const router = Router();

router.get("/encomendas", autenticar, listar);
router.post("/encomendas", autenticar, adicionar);
router.delete("/encomendas/:id", autenticar, deletar);

export default router;