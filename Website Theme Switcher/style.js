let paragraph = document.querySelector('.paragraph')
let main = document.querySelector('.main')
let h1 = document.querySelector('h1')
let body = document.querySelector('body')

function changeDarkMode() {
  paragraph.style.color = "aqua";
  paragraph.style.fontFamily = "monospace";
  main.style.backgroundColor = "darkgray";
  body.style.backgroundColor = "black";
  h1.style.color = "white";
}

function changeStylish() {
  paragraph.style.color = "tomato";
  paragraph.style.fontFamily = "fantasy";
  main.style.backgroundColor = "white";
  body.style.backgroundColor = "yellow";
  h1.style.color = "brown";
}

function changeCrazy() {
  paragraph.style.color = "yellow";
  paragraph.style.fontFamily = "cursive";
  main.style.background = "linear-gradient(to bottom, black,    darkgray)";
  body.style.backgroundColor = "hotpink";
  h1.style.color = "cyan";
}

function changeNormal() {
  paragraph.style.color = "black";
  paragraph.style.fontFamily = "'Lato', sans-serif";
  main.style.background = "white";
  body.style.backgroundColor = "white";
  h1.style.color = "black";
}

document.querySelector('.dark-mode').onclick = changeDarkMode
document.querySelector('.stylish').onclick = changeStylish
document.querySelector('.crazy').onclick = changeCrazy
document.querySelector('.normal').onclick = changeNormal
