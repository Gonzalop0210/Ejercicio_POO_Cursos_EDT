import { OBJECT_USUARIOS_REGISTRADOS } from './registro_nuevo_usuario.js'
import { BUTTON_REGISTRAR_USUARIO } from './DOM.js'
import { obtenerUsuariosObject } from './registro_nuevo_usuario.js'
export const ADD_NOMBRE_NUEVO = document.getElementById('nombre_bienvenida_nuevo_usuario')

document.addEventListener('load', ()=>{
  ADD_NOMBRE_NUEVO.textContent = 'obtenerUsuariosObject()'
})