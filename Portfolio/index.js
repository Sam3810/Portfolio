let button = document.getElementById('proyecto__button')
let github = document.getElementById('footer__button')
let submit = document.getElementById('input__enviar')
let nombre = document.getElementById('input__nombre')
let correo = document.getElementById('input__correo')
let mensaje = document.getElementById('input__mensaje')







button.addEventListener('click', webpage)
github.addEventListener('click', githubpage)

function webpage () {
    window.open('https://orianabuenoduque.netlify.app/')
}

function githubpage () {
    window.open('https://github.com/Sam3810')
}

submit.addEventListener('click', function() {

    if (nombre.value !== "" && correo.value !== "" && mensaje.value !== "") {
        alert('Correo enviado exitosamente')
    }
    
});

