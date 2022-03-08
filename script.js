const abre_menu = document.getElementById('abre_menu')
const fecha_menu = document.getElementById('fecha_menu')
const menu = document.getElementById('menu')
const menu_transparente = document.getElementById('menu_transparente')

abre_menu.addEventListener('click', () => {
  menu.style.display = "block"
  menu.style.width = "300px"
  menu_transparente.style.display = "none"
})

fecha_menu.addEventListener('click',() => {
  menu.style.display = "none"
  menu.style.width = "0px"
  menu_transparente.style.display = "none"
})

menu_transparente.addEventListener('click', () =>  {
  menu.style.display = "none"
  menu_transparente.display = "none"
  menu.style.width = "0px"
})
