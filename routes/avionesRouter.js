import { Router } from "express";
import validarDataAvion from "../midlewares/validarDataAvion.js";
import { avionesController } from "../container/container.js";

const avionesRouter = Router();

avionesRouter.get("/", avionesController.getTodos);

avionesRouter.use(validarDataAvion);
avionesRouter.post("/", avionesController.crearOModificar);

export default avionesRouter;
