class AvionesController {
  constructor(service) {
    this.service = service;
  }

  getTodos = (req, res) => {
    try {
      return res.status(200).send(this.service.getTodos());
    } catch (error) {
      return res.status(500).send({
        errorMsg: "Error en el servidor",
      });
    }
  };

  crearOModificar = (req, res) => {
    try {
      const { id, xa, ya, za } = req.body;
      const resultado = this.service.crearOModificar({
        id: id.toUpperCase(),
        xa,
        ya,
        za,
      });
      return res.status(200).send({ ...resultado });
    } catch (error) {
      return res.status(500).send({
        errorMsg: "Error en el servidor",
      });
    }
  };
}

export default AvionesController;
