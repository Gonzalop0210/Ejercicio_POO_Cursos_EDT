import Alumno from "./clases/classAlumnos.js"

const COMBO_CURSOS = document.getElementById('combo_cursos_index')
const CONTAINER_MOSTRAR_CURSOS_SELECIONADOS = document.getElementById('mostrar_cursos_seleccionados_registro')

//Seleccion de cursos, mostrar y eliminar el curso ya seleccionado
if (COMBO_CURSOS) {
  COMBO_CURSOS.addEventListener('change', ()=> {
    if (COMBO_CURSOS.selectedIndex > 0) { //Para que el usuario no seleccione la opcion 'seleccione'
      const CURSO_SELECCIONADO = COMBO_CURSOS.value
      //Añadir elementos HTML para mostrar los cursos
      const DIV_CONTAINER_CURSO_ITEM = document.createElement('div')
      const SPAN_NOMBRE_CURSO = document.createElement('span')
      const ICON_ELIMINAR_CURSO = document.createElement('i')
      //Añadiendo las clases a los nodos creados
      DIV_CONTAINER_CURSO_ITEM.classList.add('container--cursos-seleccionado__item')
      SPAN_NOMBRE_CURSO.classList.add('textarea__curso--seleccionado')
      ICON_ELIMINAR_CURSO.classList.add('fa-solid')
      ICON_ELIMINAR_CURSO.classList.add('fa-xmark')
      ICON_ELIMINAR_CURSO.id = `quitar_curso_${CURSO_SELECCIONADO}`
      //Colocando los nodos dentro de sus containers correspondientes
      CONTAINER_MOSTRAR_CURSOS_SELECIONADOS.appendChild(DIV_CONTAINER_CURSO_ITEM)
      DIV_CONTAINER_CURSO_ITEM.appendChild(SPAN_NOMBRE_CURSO)
      SPAN_NOMBRE_CURSO.textContent = CURSO_SELECCIONADO
      DIV_CONTAINER_CURSO_ITEM.appendChild(ICON_ELIMINAR_CURSO)
      //Eliminar el curso seleccionado del combo
      for (const option of COMBO_CURSOS) {
        if (option.value === CURSO_SELECCIONADO) option.classList.add('ocultar')
      }
      //Hacer que en el combo se mantenga el seleccione
      COMBO_CURSOS.selectedIndex = 0
      //Deseleccionar los cursos y devolverlos al combo
      const ICON_QUITAR_CURSO_SELECCIONADO = document.getElementById(`quitar_curso_${CURSO_SELECCIONADO}`)
      ICON_QUITAR_CURSO_SELECCIONADO.addEventListener('click', ()=> {
        for (const option of COMBO_CURSOS) {
          if (`quitar_curso_${option.value}` == ICON_QUITAR_CURSO_SELECCIONADO.id) option.classList.remove('ocultar')
        }
        CONTAINER_MOSTRAR_CURSOS_SELECIONADOS.removeChild(DIV_CONTAINER_CURSO_ITEM)
      })
    } else {
      alert('Seleccione una opción')
    }
  })
}

//Validaciones de llenado de los inputs
const NOMBRE_NUEVO_USUARIO_REG = document.getElementById('nombre_registro_nuevo_usuario')
const APELLIDOS_NUEVO_USUARIO_REG = document.getElementById('apellidos_registro_nuevo_usuario')
const EDAD_NUEVO_USUARIO_REG = document.getElementById('edad_registro_nuevo_usuario')
const CORREO_NUEVO_USUARIO_REG = document.getElementById('correo_registro_nuevo_usuario')
const CONTRASEÑA_NUEVO_USUARIO_REG = document.getElementById('contraseña_registro_nuevo_usuario')
//Contabilizamos la cantidad de click para validar la seleccion del combo
let cont = 0
if (COMBO_CURSOS) {
  COMBO_CURSOS.addEventListener('click', ()=> {
    cont++
    return cont;
  })
}
//Creando e inicializando el objeto para poder exportarlo
const OBJECT_USUARIOS_REGISTRADOS = {}
//Validando que los campos no estén vacios
if (BUTTON_REGISTRAR_USUARIO) {
  BUTTON_REGISTRAR_USUARIO.addEventListener('click', ()=> {
    if (NOMBRE_NUEVO_USUARIO_REG.value === '' || APELLIDOS_NUEVO_USUARIO_REG.value === '' || EDAD_NUEVO_USUARIO_REG.value === '' || CORREO_NUEVO_USUARIO_REG.value === '' || CONTRASEÑA_NUEVO_USUARIO_REG.value === '' || cont <= 1) {
      alert('Llenar completamente el formulario')
    } else {
      //Obtengo los datos del usuario que se registro
      const NUEVO_USUARIO = new Alumno(NOMBRE_NUEVO_USUARIO_REG.value, APELLIDOS_NUEVO_USUARIO_REG.value, EDAD_NUEVO_USUARIO_REG.value, CORREO_NUEVO_USUARIO_REG.value, CONTRASEÑA_NUEVO_USUARIO_REG.value)
      //Aqui selecciono todos los elementos span del html y los que se crea al seleccionar o viceversa
      const HTML_SPAN_NOMBRE_CURSO = document.querySelectorAll('.textarea__curso--seleccionado')
      //Ya que es un NodeList[] se recorre y obtengo el valor del span
      for (const curso of HTML_SPAN_NOMBRE_CURSO) {
        NUEVO_USUARIO.cursos.push(curso.innerHTML)
      }
      //Agregar nuevo usuario al objeto de usuarios
      OBJECT_USUARIOS_REGISTRADOS[NUEVO_USUARIO.nombre] = NUEVO_USUARIO
      console.log(OBJECT_USUARIOS_REGISTRADOS);
      /* window.location.href = URL_BIENVENIDA_USUARIO */
    }
  })
}
//Exportando el archivo
/* export { OBJECT_USUARIOS_REGISTRADOS }
import { ADD_NOMBRE_NUEVO } from "./bienvenida_usuario.js"
function clickBotonRegistrar(nombreUsuario) {
  ADD_NOMBRE_NUEVO.textContent = nombreUsuario
}

if (BUTTON_REGISTRAR_USUARIO){
    BUTTON_REGISTRAR_USUARIO.addEventListener('click', clickBotonRegistrar)
}

export { clickBotonRegistrar } */