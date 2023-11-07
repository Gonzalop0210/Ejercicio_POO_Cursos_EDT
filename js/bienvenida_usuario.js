const ADD_NOMBRE_NUEVO = document.getElementById('nombre_bienvenida_nuevo_usuario')
const CONTAINER_BIENVENIDA = document.getElementById('section_bienvenida')
const urlParams = new URLSearchParams(window.location.search)
const nombreAlumno = urlParams.get("nombre_registro_nuevo_usuario")

//Guardando los cursos seleccionados en un arreglo
export let arrayCursosSeleccionados = []

export function llenarArreglo(guardarCurso) {
  // Resto del código para llenar el arreglo
  arrayCursosSeleccionados.push(guardarCurso);
}

if (nombreAlumno) {
  ADD_NOMBRE_NUEVO.innerHTML = nombreAlumno
} else {
  console.log('Algo Falla');
}

const containerAbsolutoDiv = document.querySelector('.container-section__container-content-usuarios')
const nombre_cursos_xd = urlParams.get("nombre_registro_nuevo_usuario")
const cursos_xd = urlParams.get("id_nombre_curso_seleccionado")
if (nombre_cursos_xd) {
  const divContainer = document.createElement('div')
  divContainer.classList.add('container-section__container-item-personalizados')
  const spanNameCurso = document.createElement('span')
  spanNameCurso.classList.add('container-item-personalizado--name')
  const divIcon = document.createElement('div')
  divIcon.classList.add('container-item-personalizado--opciones')
  const spanIcon = document.createElement('span')
  spanIcon.classList.add('container-item-personalizado--opciones-item')
  spanIcon.classList.add('container-item-personalizado--opciones-eliminar')
  const icon = document.createElement('i')
  icon.classList.add('fa-solid')
  icon.classList.add('fa-trash')
  containerAbsolutoDiv.appendChild(divContainer)
  divContainer.appendChild(spanNameCurso)
  divContainer.appendChild(divIcon)
  divIcon.appendChild(spanIcon)
  spanIcon.appendChild(icon)
  spanNameCurso.textContent = arrayCursosSeleccionados[0]
  console.log(arrayCursosSeleccionados);
} else {
  console.log('no funciona');
}
