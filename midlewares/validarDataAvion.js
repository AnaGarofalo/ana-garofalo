import Validations from "../utils/Validations.js";

const validarDataAvion = (req, res, next) => {
  const { id, xa, ya, za } = req.body;

  if (
    !Validations.esIdValida(id) ||
    !Validations.esCoordenadaValida(xa) ||
    !Validations.esCoordenadaValida(ya) ||
    !Validations.esAltitudValida(za)
  ) {
    return res.status(400).send({
      errorMsg: "datos no válidos",
    });
  }
  next();
};

export default validarDataAvion;
