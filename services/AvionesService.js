import AlertaProximidad from "../utils/AlertaProximidad.js";

class AvionesService {
  constructor(aviones) {
    this.aviones = aviones;
  }

  getTodos() {
    return this.aviones;
  }

  encontrarIndice(id) {
    return this.aviones.findIndex(
      (avion) => avion.id.toUpperCase() === id.toUpperCase()
    );
  }

  crearOModificar(avion) {
    const indice = this.encontrarIndice(avion.id);
    const existe = indice >= 0;
    existe ? this.modificar(avion, indice) : this.crear(avion);

    return {
      msg: existe ? "Avión actualizado con éxito" : "Avión agregado con éxito",
      avionesProximos: AlertaProximidad.calcularAvionesProximos(
        avion,
        this.aviones
      ),
    };
  }

  crear(avion) {
    return this.aviones.push(avion);
  }

  modificar(avion, indice) {
    this.aviones[indice] = avion;
    return avion;
  }
}

export default AvionesService;
