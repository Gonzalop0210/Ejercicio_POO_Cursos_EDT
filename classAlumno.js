class Alumno extends Persona {
  constructor(nombre,apellidos,edad,correo,cursos,activo){
    super(nombre,apellidos,edad,correo,cursos)
    this.activo = activo
  }
  getActivo () {
    return this.activo
  }
  setActivo (activo) {
    this.activo = activo
  }
}