import { Router } from "express";
import EnderecoController from "../controllers/enderecoController";
import  UsuarioController from "../controllers/usuarioController";

const router = Router();

// endereço
router.post('/usuarios/:id/enderecos', EnderecoController.create);
router.get('/usuarios/:id/enderecos', EnderecoController.read);
router.put('/usuarios/:id/enderecos', EnderecoController.update);
router.delete('/usuarios/:id/enderecos', EnderecoController.delete);

// usuario
router.post("/usuario", UsuarioController.create);
router.get("/usuario/:id", UsuarioController.read);
router.put("/usuario/:id", UsuarioController.update);
router.delete("/usuario/:id", UsuarioController.delete);

export default router;
