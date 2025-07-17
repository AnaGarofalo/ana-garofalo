export default class AlertaProximidad {
  static calcularAvionesProximos(avionAModificar, aviones) {
    const avionesProximos = [];
    for (const avion of aviones) {
      if (
        avionAModificar.id.toUpperCase() !== avion.id.toUpperCase() &&
        this.esProximo(avionAModificar, avion)
      ) {
        avionesProximos.push(avion.id);
      }
    }
    return avionesProximos;
  }

  static esProximo(a1, a2) {
    return this.sumarCoords(a1, a2) ** 0.5 < 500;
  }

  static sumarCoords(a1, a2) {
    return (
      this.coordsCuad(a1, a2, "xa") +
      this.coordsCuad(a1, a2, "ya") +
      this.coordsCuad(a1, a2, "za")
    );
  }

  static coordsCuad(a1, a2, prop) {
    return (a1[prop] - a2[prop]) ** 2;
  }
}
