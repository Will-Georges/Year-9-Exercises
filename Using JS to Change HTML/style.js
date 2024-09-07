const mainButton = document.querySelector(".button");

function changeButton() {
  mainButton.style.fontFamily = "fantasy";
  mainButton.style.color = "black";
  mainButton.textContent = "There is no writing in this button";
  mainButton.style.width = "250px";
  mainButton.style.border = "5px solid tomato";
  mainButton.style.textAlign = "center";
  mainButton.style.margin = "auto";
}

mainButton.onclick = changeButton;
