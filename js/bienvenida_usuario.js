import { OBJECT_USUARIOS_REGISTRADOS } from './registro_nuevo_usuario.js'
import { BUTTON_REGISTRAR_USUARIO } from './DOM.js'
export const ADD_NOMBRE_NUEVO = document.getElementById('nombre_bienvenida_nuevo_usuario')
export const CONTAINER_BIENVENIDA = document.getElementById('section_bienvenida')

document.addEventListener('load', ()=>{
  ADD_NOMBRE_NUEVO.textContent = 'obtenerUsuariosObject()'
})