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

const boton_enviar = document.querySelector('.container-button__button')
const input_name = document.querySelector('.container__inputs--name')
const input_lastname = document.querySelector('.container__inputs--lastname')
const input_age = document.querySelector('.container__inputs--age')
const input_email = document.querySelector('.container__inputs--email')

combobox_cursos.addEventListener('change', (e)=>{
  const div = document.createElement('div');
  div.classList.add('container-curso--seleccionado')
  const span = document.createElement('span')
  span.classList.add('curso-seleccionado')
  const icon_equis = document.createElement('i')
  icon_equis.classList.add('fa-solid')
  icon_equis.classList.add('fa-xmark')
  if(combobox_cursos.selectedIndex > 0) {
    span.textContent = e.target.value
    
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

  icon_equis.addEventListener('click', ()=>{
    const nuevo_curso = document.createElement('option')
    nuevo_curso.value = span.textContent
    nuevo_curso.textContent = span.textContent
    combobox_cursos.appendChild(nuevo_curso)
    contenedor_cursos_seleccionados.removeChild(div);
  })
  /* ---------------------------------------------------------- */
  boton_enviar.addEventListener('click', ()=>{
    if (select_alumno.checked) {
      console.log('Casilla estudiante');
    } else if (select_profesor.checked) {
      console.log('Casilla profesor');
    } else {
      console.log('Selecciona una casilla');
    }
  })
})