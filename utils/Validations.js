export default class Validations {
  static esCoordenadaValida(coordenada) {
    return (
      (!!coordenada || coordenada === 0) &&
      !Number.isNaN(parseFloat(coordenada))
    );
  }

  static esAltitudValida(coordenada) {
    return this.esCoordenadaValida(coordenada) && coordenada >= 0;
  }

  static esIdValida(id) {
    const regex = /^[A-Z0-9]{6}$/i;
    return !!id && typeof id === "string" && regex.test(id);
  }
}
