const link_button_registro = document.querySelector('.container-section__button--registro')
const link_button_sesion = document.querySelector('.container-section__button--inicio-sesion')

const url_iniciar_sesion = '/iniciar_sesion.html'
const url_registro = '/registrar_usuario.html'

link_button_sesion.addEventListener('click', ()=>{
  window.location.href = url_iniciar_sesion
})

link_button_registro.addEventListener('click', ()=> {
  window.location.href = url_registro
})