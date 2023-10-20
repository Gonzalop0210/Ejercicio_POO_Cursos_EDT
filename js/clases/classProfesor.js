class Profesor extends Usuario {
  constructor(nombre, apellidos, codigo) {
    super(nombre,apellidos)
    this.codigo = codigo
  }
  getCodigo() {
    return this.codigo
  }
  setCodigo(codigo) {
    this.codigo = codigo
  }
}