class Curso {
  constructor(nombre,cantidadClases,inscritos,poster) {
    this.nombre = nombre,
    this.cantidadClases = cantidadClases,
    this.inscritos = inscritos,
    this.poster = poster
  }
  getNombre() {
    return this.nombre
  }
  
  setNombre(nombre) {
    this.nombre = nombre
  }
  
  getCantidadClases() {
    return this.cantidadClases
  }
  
  setCantidadClases(cantidad) {
    this.cantidadClases = cantidad
  }

  getInscritos() {
    return this.inscritos
  }

  setInscritos(inscritos) {
    this.inscritos = inscritos
  }

  getPoster() {
    return this.poster
  }

  setPoster(poster) {
    this.poster = poster
  }
}