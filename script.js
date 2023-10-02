class Animal {
  constructor(nombre, raza, tamaño, muerde) {
    this.nombre = nombre,
    this.raza = raza,
    this.tamaño = tamaño,
    this.muerde = muerde
  }
  /* GET */
  getNombre() {
    return this.nombre
  }
  getRaza() {
    return this.raza
  }
  getTamaño() {
    return this.tamaño
  }
  getMuerde() {
    return this.muerde
  }
  /* SET */
  setNombre(nombreNuevo) {
    this.nombre = nombreNuevo
  }
  setRaza(razaNueva) {
    this.raza = razaNueva
  }
  setTamaño(tamañoNuevo) {
    this.tamaño = tamañoNuevo
  }
  setMuerde(muerdeNuevo) {
    this.muerde = muerdeNuevo
  }

  presentation() {
    return `Soy un ${this.raza} de nombre ${this.nombre} y soy un animal ${this.tamaño}`;
  }
}

const perro = new Animal('Rex', 'Cocker', 'mediano', true);
const gato = new Animal('Epifanio', 'gato chusco', 'grande', true);
