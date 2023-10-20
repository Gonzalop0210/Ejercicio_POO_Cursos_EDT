class Alumno extends Usuario {
  constructor(nombre, apellidos, edad, correo, contraseña, cursos) {
    super(nombre, apellidos)
    this.edad = edad
    this.correo = correo
    this.contraseña = contraseña
    this.cursos = cursos
  }
  getEdad() {
    return this.edad
  }
  setEdad(edad) {
    this.edad = edad
  }
  getCorreo() {
    return this.correo
  }
  setCorreo(correo) {
    this.correo = correo
  }
  getContraseña() {
    return this.contraseña
  }
  setContraseña(contraseña) {
    this.contraseña = contraseña
  }
  getCursos() {
    return this.cursos
  }
  setCursos(cursos) {
    this.cursos = cursos
  }
}