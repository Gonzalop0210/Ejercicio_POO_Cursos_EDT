class Profesor extends Persona {
  constructor(nombres, apellidos, edad, correo, cursos, calificacion){
    super(nombres,apellidos,edad,correo,cursos)
    this.calificacion = calificacion
  }
  getCalificacion() {
    return this.calificacion
  }
  setCalificacion(calificacion) {
    this.calificacion = calificacion
  }
}