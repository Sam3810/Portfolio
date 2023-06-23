//Menu
const cerrar = document.querySelector('.cerrar-menu')
const abrir = document.querySelector('.abrir-menu')
const nav = document.querySelector('.nav')

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})

//Proyectos
let buttonNext = document.querySelector('#next')
let buttonBack = document.querySelector('#back')
let art1 = document.querySelector('#article1')
let art2 = document.querySelector('#article2')
let art3 = document.querySelector('#article3')
let art4 = document.querySelector('#article4')
let art5 = document.querySelector('#article5')
let art6 = document.querySelector('#article6')
let i = 0

buttonNext.addEventListener('click', () => {
    switch(true) {
        case i == 0:
            art1.classList.remove('article')
            art2.classList.add('article')
            i += 1
            break
        case i == 1:
            art2.classList.remove('article')
            art3.classList.add('article')
            i += 1
            break
        case i == 2:
            art3.classList.remove('article')
            art4.classList.add('article')
            i += 1
            break
        case i == 3:
            art4.classList.remove('article')
            art5.classList.add('article')
            i += 1
            break
        case i == 4:
            art5.classList.remove('article')
            art6.classList.add('article')
            i += 1
            break
        case i == 5:
            art6.classList.remove('article')
            art1.classList.add('article')
            i = 0
    }
})

buttonBack.addEventListener('click', () => {
    switch(true) {
        case i == 0:
            art1.classList.remove('article')
            art6.classList.add('article')
            i = 5
            break
        case i == 5:
            art6.classList.remove('article')
            art5.classList.add('article')
            i = 4
            break
        case i == 4:
            art5.classList.remove('article')
            art4.classList.add('article')
            i = 3
            break
        case i == 3:
            art4.classList.remove('article')
            art3.classList.add('article')
            i = 2
            break
        case i == 2:
            art3.classList.remove('article')
            art2.classList.add('article')
            i = 1
            break
        case i == 1:
            art2.classList.remove('article')
            art1.classList.add('article')
            i = 0
            break
    }
})