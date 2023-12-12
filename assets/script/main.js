let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)



function jumpHandler() {
  interaction.classList.toggle('jump')
}

let frontend = document.querySelector("a:nth-of-type(1)");
let design = document.querySelector("a:nth-of-type(2)");
let and = document.querySelector("a:nth-of-type(3)");
let development = document.querySelector("a:nth-of-type(4)");
let sprint5 = document.querySelector("a:nth-of-type(5)");
let fix = document.querySelector("a:nth-of-type(6)");



frontend.addEventListener('click', colorChange)
design.addEventListener('mouseover', colorChange2)
and.addEventListener('dblclick', colorChange3)
development.addEventListener('keydown', keydown)
sprint5.addEventListener('wheel', onMouse)


function colorChange() {
  frontend.classList.toggle('frontend-color')
}

function colorChange2() {
  design.classList.toggle('design')
}

function colorChange3() {
  and.classList.toggle('and')
}

function keydown() { 
  if (keydown ==="x") {
   return;  
  }
  development.classList.toggle('development')
}

function onMouse(){
  sprint5.classList.toggle('sprint5')
}





