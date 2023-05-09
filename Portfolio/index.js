let button = document.getElementById('proyecto__button')
let button2  = document.getElementById('proyecto2__button')
let github = document.getElementById('footer__button')







button.addEventListener('click', page1)
button2.addEventListener('click', page2)
github.addEventListener('click', githubpage)

function page1 () {
    window.open('https://orianabuenoduque.netlify.app/')
}

function page2 () {
    window.open('https://bethoven.netlify.app/')
}

function githubpage () {
    window.open('https://github.com/Sam3810')
}


