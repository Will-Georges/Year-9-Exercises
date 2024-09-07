// Variables

let first = document.querySelector(".door1");
let second = document.querySelector(".door2");
let third = document.querySelector(".door3");
let paragraph = document.querySelector(".instructions");
let image1 = document.querySelector(".box1");
let image2 = document.querySelector(".box2");
let image3 = document.querySelector(".box3");
let restart = document.querySelector(".restart");


// Functions

function whenDoor1Clicked() {
   Math.random()
  if (Math.random() < 0.6){
    paragraph.textContent = "Phew! Lucky for you, you have won the gold and are now rich.";
    image1.src = "gold-bar.jpeg";
    image1.alt = "A pile of gold bars.";
    image2.src = "explosion.gif";
    image2.alt = "A nuke exploding.";
    image3.src = "explosion.gif";
    image3.alt = "A nuke exploding.";
  } else if (Math.random() > 0.6) {
    paragraph.textContent = "Nuke incoming!!!!!!!!!!!";
    image1.src = "explosion.gif";
    image1.alt = "A nuke exploding.";
    image2.src = "gold-bar.jpeg";
    image2.alt = "A pile of gold bars.";
    image3.src = "gold-bar.jpeg";
    image3.alt = "A pile of gold bars.";
  }
}

function whenDoor2Clicked() {
  Math.random()
  if (Math.random() < 0.6){
    paragraph.textContent = "Phew! Lucky for you, you have won the gold and are now rich.";
    image2.src = "gold-bar.jpeg";
    image2.alt = "A pile of gold bars.";
    image1.src = "explosion.gif";
    image1.alt = "A nuke exploding.";
    image3.src = "explosion.gif";
    image3.alt = "A nuke exploding.";
  } else if (Math.random() > 0.6) {
    paragraph.textContent = "Nuke incoming!!!!!!!!!!!";
    image2.src = "explosion.gif";
    image2.alt = "A nuke exploding.";
    image1.src = "gold-bar.jpeg";
    image1.alt = "A pile of gold bars.";
    image3.src = "gold-bar.jpeg";
    image3.alt = "A pile of gold bars.";
  }
}

function whenDoor3Clicked() {
  Math.random()
  if (Math.random() < 0.6){
    paragraph.textContent = "Phew! Lucky for you, you have won the gold and are now rich.";
    image3.src = "gold-bar.jpeg";
    image3.alt = "A pile of gold bars.";
    image2.src = "explosion.gif";
    image2.alt = "A nuke exploding.";
    image1.src = "explosion.gif";
    image1.alt = "A nuke exploding.";
  } else if (Math.random() > 0.6) {
    paragraph.textContent = "Nuke incoming!!!!!!!!!!!";
    image3.src = "explosion.gif";
    image3.alt = "A nuke exploding.";
    image2.src = "gold-bar.jpeg";
    image2.alt = "A pile of gold bars.";
    image1.src = "gold-bar.jpeg";
    image1.alt = "A pile of gold bars.";
  }
}

function whenRestartClicked() {
  paragraph.textContent = "Mr. Pountney ordered gold from Amazon. For some reason, there are 2 other boxes, containing bombs that explode when opened. Open the right box to get the gold and stay alive.";
    image1.src = "box.png";
    image1.alt = "An amazon box."
    image2.src = "box.png";
    image2.alt = "An amazon box."
    image3.src = "box.png";
    image3.alt = "An amazon box."
}



// Onclick

first.onclick = whenDoor1Clicked;
second.onclick = whenDoor2Clicked;
third.onclick = whenDoor3Clicked;
restart.onclick = whenRestartClicked;