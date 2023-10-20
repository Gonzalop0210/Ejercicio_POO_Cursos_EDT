const COMBO_CURSOS = document.getElementById('combo_cursos_index')

COMBO_CURSOS.addEventListener('change', ()=> {
  if (COMBO_CURSOS.selectedIndex > 0) { //Para que el usuario no seleccione la opcion 'seleccione'
    const CURSO_SELECCIONADO = COMBO_CURSOS.value
    console.log(CURSO_SELECCIONADO)
  } else {
    console.error('Seleccione una opción')
  }
})