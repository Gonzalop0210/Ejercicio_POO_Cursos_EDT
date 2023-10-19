const link_button_registro = document.querySelector('.container-section__button--registro')
const link_button_sesion = document.querySelector('.container-section__button--inicio-sesion')
const BUTTON_INICIAR_SESION = document.querySelector('.container-form__button--entrar-ingresar')
const BUTTON_REGISTRAR_USUARIO = document.querySelector('.container-form__button--entrar-registrar')
const BUTTON_AGREGAR_CURSO = document.querySelector('.container-section__agregar-curso')
const OPCION_EDITAR = document.querySelector('.container-item-personalizado--opciones-editar')
const GUARDAR_CAMBIOS_EDITAR = document.querySelector('.container-form__button--editar-guardar')

const url_iniciar_sesion = '/iniciar_sesion.html'
const url_registro = '/registrar_usuario.html'
const URL_BIENVENIDA_USUARIO = '/usuario_bienvenida.html'
const URL_AGREGAR_CURSO = '/agregar_curso.html'
const URL_EDITAR_USUARIO = '/administrador_usu.html'
const URL_ADMINISTRADOR_BIENVENIDA = '/administrador_bienvenida.html'

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

if (BUTTON_REGISTRAR_USUARIO) {
  BUTTON_REGISTRAR_USUARIO.addEventListener('click', ()=> {
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

if (GUARDAR_CAMBIOS_EDITAR) {
  GUARDAR_CAMBIOS_EDITAR.addEventListener('click', ()=> {
    window.location.href = URL_ADMINISTRADOR_BIENVENIDA
  })
}