import { OBJECT_USUARIOS_REGISTRADOS } from "./registro_nuevo_usuario.js"
export const ADD_NOMBRE_NUEVO = document.getElementById('nombre_bienvenida_nuevo_usuario')

document.addEventListener('DOMContentLoaded', ()=> {
  /* ADD_NOMBRE_NUEVO.textContent = OBJECT_USUARIOS_REGISTRADOS[NUEVO_USUARIO.nombre].nombre */
  console.log(OBJECT_USUARIOS_REGISTRADOS);
})