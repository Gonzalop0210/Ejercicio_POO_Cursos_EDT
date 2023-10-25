import { OBJECT_USUARIOS_REGISTRADOS } from './registro_nuevo_usuario.js'
const ADD_NOMBRE_NUEVO = document.getElementById('nombre_bienvenida_nuevo_usuario')

document.addEventListener('change', () => {
  if (OBJECT_USUARIOS_REGISTRADOS) {
    console.log(OBJECT_USUARIOS_REGISTRADOS['nombre']);
  } else {
    console.log('El objeto OBJECT_USUARIOS_REGISTRADOS está vacío o no tiene la propiedad "nombre".');
  }
});