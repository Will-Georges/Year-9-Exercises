// Variable(s) with document.querySelector
let colorButton = document.querySelector(".clickToChangeColor");
let text = document.querySelector(".changeMe");
let sizeButton = document.querySelector(".clickToChangeSize");

let textColor = "black";
let textSize = "50px" ;

// A function 
function changeTextColor() {
  if (textColor === "black") {
    textColor = "red";
    text.style.color = "red";
  } else if (textColor === "red") {
    textColor = "blue";
    text.style.color = "blue";
  } else if (textColor === "blue") {
    textColor = "green";
    text.style.color = "green";
  } else if (textColor === "green") {
    textColor = "yellow";
    text.style.color = "yellow";
  } else if (textColor === "yellow") {
    textColor = "deepskyblue";
    text.style.color = "deepskyblue";
  } else if (textColor === "deepskyblue") {
    textColor = "black";
    text.style.color = "black";
  } 
}


function changeTextSize() {
  if (textSize === "50px") {
    textSize = "25px";
    text.style.fontSize = "25px";
  } else if (textSize === "25px") {
    textSize="75px";
    text.style.fontSize = "75px";
  } else if (textSize === "75px") {
    textSize="100px";
    text.style.fontSize = "100px";
  } else if (textSize === "100px") {
    textSize="50px";
    text.style.fontSize = "50px";
  }
}




// Set the onclick property
colorButton.onclick = changeTextColor;
sizeButton.onclick = changeTextSize;