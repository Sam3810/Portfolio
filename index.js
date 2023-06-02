const cerrar = document.querySelector('.cerrar-menu')
const abrir = document.querySelector('.abrir-menu')
const nav = document.querySelector('.nav')

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})