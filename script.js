const button_yes = document.querySelector('.container-buton__button--yes');
const button_not = document.querySelector('.container-buton__button--no');

button_yes.addEventListener('click', ()=>{
  window.open('./bienvenida.html', '_blank')
})

button_not.addEventListener('click', ()=>{
  window.open('/registro.html', '_blank')
})