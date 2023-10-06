const title_registro = document.querySelector('.container__title-persona--registro')
const select_profesor = document.querySelector('.container-checkbox--seleccionar-profesor')
const select_alumno = document.querySelector('.container-checkbox--seleccionar-alumno')
const label_combo_cursos = document.querySelector('.container__label-cursos')

select_profesor.addEventListener('change', ()=>{
  select_alumno.checked = false
  if (select_profesor.checked) {
    title_registro.textContent = 'Profesor'
    label_combo_cursos.textContent = 'Cursos a dictar'
  }
})

select_alumno.addEventListener('change', ()=>{
  select_profesor.checked = false
  if (select_alumno.checked) {
    title_registro.textContent = 'Estudiante'
    label_combo_cursos.textContent = 'Cursos a llevar'
  }
})

document.addEventListener('DOMContentLoaded', ()=>{
  select_alumno.checked = true
  title_registro.textContent = 'Estudiante'
  label_combo_cursos.textContent = 'Cursos a llevar'
})


const combobox_cursos = document.querySelector('.container__cursos')
const contenedor_cursos_seleccionados = document.querySelector('.container__group-inputs--cursos-seleccionados')

combobox_cursos.addEventListener('change', (e)=>{
  const div = document.createElement('div');
  div.classList.add('container-curso--seleccionado')
  const span = document.createElement('span')
  span.classList.add('curso-seleccionado')
  if(combobox_cursos.selectedIndex > 0) {
    span.textContent = e.target.value
    const icon_equis = document.createElement('i')
    icon_equis.classList.add('fa-solid')
    icon_equis.classList.add('fa-xmark')

    contenedor_cursos_seleccionados.appendChild(div)
    div.appendChild(span)
    div.appendChild(icon_equis)

    const curso_seleccionado = e.target.value
    for (let index of combobox_cursos) {
      if (index.value == curso_seleccionado) {
        combobox_cursos.removeChild(index)
      }
    }
  }
  combobox_cursos.selectedIndex = 0
})