import AvionesService from "../services/AvionesService.js";
import AvionesController from "../controllers/AvionesController.js";
import datos from "../bdd/datos.js";

const avionesService = new AvionesService(datos);
const avionesController = new AvionesController(avionesService);

export { avionesController };
