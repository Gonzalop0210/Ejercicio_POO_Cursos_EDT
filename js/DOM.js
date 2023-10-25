const link_button_registro = document.querySelector('#button_registrar_nueva_cuenta')
const link_button_sesion = document.querySelector('#button_iniciar_sesion')
const BUTTON_INICIAR_SESION = document.querySelector('#button_ingresar_sesion')
export const BUTTON_REGISTRAR_USUARIO = document.querySelector('#button_registrar_nuevo_usuario')
const BUTTON_AGREGAR_CURSO = document.querySelector('#agregar_curso_usuario')
const OPCION_EDITAR = document.querySelector('#usuario_opcion_editar')
const BUTTON_EDITAR_USUARIO_ADMIN = document.querySelector('#button_editar_usuario_admin')
const REGISTRAR_NUEVO_CURSO_ADMIN = document.querySelector('#registrar_nuevo_curso')
const ADD_CURSO_NUEVO_ADMIN = document.querySelector('#nuevo_curso_guardar_cambios')
const EDITAR_CURSO_ADMIN = document.querySelector('#editar_curso_admin')
const AGREGAR_CURSO_NUEVO_USUARIO = document.querySelector('#agregar_curso_usuario_nuevo')

const url_iniciar_sesion = '/iniciar_sesion.html'
const url_registro = '/registrar_usuario.html'
const URL_BIENVENIDA_USUARIO = '/usuario_bienvenida.html'
const URL_AGREGAR_CURSO = '/agregar_curso.html'
const URL_EDITAR_USUARIO = '/administrador_usu.html'
const URL_ADMINISTRADOR_BIENVENIDA = '/administrador_bienvenida.html'
const URL_AGREGAR_NUEVO_CURSO = '/admin_registrar_curso.html'
const URL_ADMIN_CURSOS = '/administrador_cursos.html'
const URL_EDITAR_CURSO_ADMIN = '/admin_editar_curso.html'

if (link_button_sesion) {
  link_button_sesion.addEventListener('click', ()=>{
    window.location.href = url_iniciar_sesion
  })
}

if (link_button_registro) {
  link_button_registro.addEventListener('click', ()=> {
    window.location.href = url_registro
  })
}

if (BUTTON_INICIAR_SESION) {
  BUTTON_INICIAR_SESION.addEventListener('click', ()=>{
    window.location.href = URL_BIENVENIDA_USUARIO
  })
}

if (BUTTON_AGREGAR_CURSO) {
  BUTTON_AGREGAR_CURSO.addEventListener('click', ()=> {
    window.location.href = URL_AGREGAR_CURSO
  })
}

if (OPCION_EDITAR) {
  OPCION_EDITAR.addEventListener('click', ()=>{
    window.location.href = URL_EDITAR_USUARIO
  })
}

if (BUTTON_EDITAR_USUARIO_ADMIN) {
  BUTTON_EDITAR_USUARIO_ADMIN.addEventListener('click', ()=> {
    window.location.href = URL_ADMINISTRADOR_BIENVENIDA
  })
}

if (REGISTRAR_NUEVO_CURSO_ADMIN) {
  REGISTRAR_NUEVO_CURSO_ADMIN.addEventListener('click', ()=> {
    window.location.href = URL_AGREGAR_NUEVO_CURSO
  })
}

if (ADD_CURSO_NUEVO_ADMIN) {
  ADD_CURSO_NUEVO_ADMIN.addEventListener('click', ()=> {
    window.location.href = URL_ADMIN_CURSOS
  })
}

if (EDITAR_CURSO_ADMIN) {
  EDITAR_CURSO_ADMIN.addEventListener('click', ()=> {
    window.location.href = URL_EDITAR_CURSO_ADMIN
  })
}

if (AGREGAR_CURSO_NUEVO_USUARIO) {
  AGREGAR_CURSO_NUEVO_USUARIO.addEventListener('click', ()=> {
    window.location.href = URL_BIENVENIDA_USUARIO
  })
}
export { URL_BIENVENIDA_USUARIO }