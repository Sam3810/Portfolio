let button = document.getElementById('proyecto__button')
let button2  = document.getElementById('proyecto2__button')
let github = document.getElementById('footer__button')
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let interval = null;




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






document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}


