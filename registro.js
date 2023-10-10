const title_registro = document.querySelector('.container__title-persona--registro')
const select_profesor = document.querySelector('.container-checkbox--seleccionar-profesor')
const select_alumno = document.querySelector('.container-checkbox--seleccionar-alumno')
const label_combo_cursos = document.querySelector('.container__label-cursos')
const formulario = document.querySelector('.container__form-container')
const combobox_cursos = document.querySelector('.container__cursos')
const contenedor_combo = document.querySelector('.container__group-inputs--combobox')
const contenedor_cursos_seleccionados = document.querySelector('.container__group-inputs--cursos-seleccionados')

document.addEventListener('DOMContentLoaded', ()=>{
  select_alumno.checked = true
  title_registro.textContent = 'Estudiante'
  label_combo_cursos.textContent = 'Cursos a llevar'
})

const boton_enviar = document.querySelector('.container-button__button')
const input_name = document.querySelector('.container__inputs--name')
const input_lastname = document.querySelector('.container__inputs--lastname')
const input_age = document.querySelector('.container__inputs--age')
const input_email = document.querySelector('.container__inputs--email')

let array_alumnos = []
let array_profesore = []
let datos_curso = {
  nombre: 'HTML',
  cantidadClases: 20,
  inscritos: 8,
  poster: 'imagen HTML'
}

const add_cursos = new Curso(datos_curso)

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
})

const reset_opciones = Array.from(combobox_cursos.options)

select_profesor.addEventListener('change', ()=>{
  select_alumno.checked = false
  formulario.reset()
  reset_opciones.forEach(opcion => combobox_cursos.appendChild(opcion))
  combobox_cursos.selectedIndex = 0
  if (select_profesor.checked) {
    title_registro.textContent = 'Profesor'
    label_combo_cursos.textContent = 'Cursos a dictar'
  }
})

select_alumno.addEventListener('change', ()=>{
  select_profesor.checked = false
  formulario.reset()
  reset_opciones.forEach(opcion => combobox_cursos.appendChild(opcion))
  combobox_cursos.selectedIndex = 0
  if (select_alumno.checked) {
    title_registro.textContent = 'Estudiante'
    label_combo_cursos.textContent = 'Cursos a llevar'
  }
})

boton_enviar.addEventListener('click', ()=>{
  const nombre = input_name.value
  const apellido = input_lastname.value
  const edad = input_age.value
  const correo = input_email.value
  const activo = true
  const calificacion = 10

  if (select_alumno.checked) {
    const nuevo_Alumno = new Alumno(nombre,apellido,edad,correo,'JavaScript',activo)
    array_alumnos.push(nuevo_Alumno)
  } else if (select_profesor.checked) {
    const nuevo_Profesor = new Profesor(nombre,apellido,edad,correo,'JAVA',calificacion)
    array_profesore.push(nuevo_Profesor)
  } else {
    console.log('Selecciona una casilla');
  }
  
  console.log(contenedor_cursos_seleccionados);
  
  const span_content = document.querySelectorAll('.curso-seleccionado')
  for (let span_index of span_content) {
    const nombre_curso = span_index.textContent
    /* console.log(nombre_curso); */
  }
  
  console.log(datos_curso)
  console.log(array_alumnos)
  console.log(array_profesore)
})