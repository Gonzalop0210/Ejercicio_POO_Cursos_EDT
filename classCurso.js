class Curso {
  constructor(objetoCursos) {
    this.nombre = objetoCursos.nombre,
    this.cantidadClases = objetoCursos.cantidadClases,
    this.inscritos = objetoCursos.inscritos,
    this.poster = objetoCursos.poster
  }
  getNombre() {
    return this._nombre
  }
  
  setNombre(nombre) {
    this._nombre = nombre
  }
  
  getCantidadClases() {
    return this._cantidadClases
  }
  
  setCantidadClases(cantidad) {
    this._cantidadClases = cantidad
  }

  getInscritos() {
    return this._inscritos
  }

  setInscritos(inscritos) {
    this._inscritos = inscritos
  }

  getPoster() {
    return this._poster
  }

  setPoster(poster) {
    this._poster = poster
  }
}