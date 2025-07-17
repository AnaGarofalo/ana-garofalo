import { Router } from "express";
import avionesRouter from "./avionesRouter.js";

const routes = Router();

routes.use("/aviones", avionesRouter);

export default routes;
