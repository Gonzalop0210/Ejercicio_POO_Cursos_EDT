class Persona {
  constructor(nombre, apellido, edad, correo, cursos) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.correo = correo,
    this.cursos = cursos
  }
  getNombre () {
    return this.nombre
  }
  setNombre (nombre) {
    this.nombre = nombre
  }
  getApellido () {
    return this.apellido
  }
  setApellido(apellido) {
    this.apellido = apellido
  }
  getEdad () {
    return this.edad
  }
  setEdad (edad) {
    this.edad = edad
  }
  getCorreo () {
    return this.correo
  }
  setCorreo (correo) {
    this.correo = correo
  }
  getCursos () {
    return this.cursos
  }
  setCursos (curso) {
    this.cursos = curso
  }
}