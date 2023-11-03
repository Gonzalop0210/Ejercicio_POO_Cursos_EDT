const ADD_NOMBRE_NUEVO = document.getElementById('nombre_bienvenida_nuevo_usuario')
const CONTAINER_BIENVENIDA = document.getElementById('section_bienvenida')
const urlParams = new URLSearchParams(window.location.search)
const nombreAlumno = urlParams.get("nombre_registro_nuevo_usuario")

if (nombreAlumno) {
  ADD_NOMBRE_NUEVO.innerHTML = nombreAlumno
} else {
  console.log('Algo Falla');
}