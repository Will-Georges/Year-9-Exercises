//variables

let heading = document.querySelector (".heading");
let image = document.querySelector (".opening-image");
let playButton = document.querySelector (".play-button");
let didYouWin = document.querySelector (".did-you-win");

//functions

function whenPlayButtonClicked() {
    Math.random()
    playButton.style.cursor = "pointer";
    didYouWin.classList.add("special-did-you-win");
    didYouWin.textContent = "Did you win?";
    playButton.textContent = "";
    playButton.classList.toggle("special-play");
    if (Math.random() <0.333){
        heading.textContent = "Paper";
        image.src = "paper.jpeg";
        image.alt = "A stack of paper.";
    } else if (Math.random() > 0.666){
        heading.textContent = "Rock";
        image.src = "rock.jpeg";
        image.alt = "A small stone";
    } else if (Math.random() > 0.333 &&  Math.random() < 0.666){
        heading.textContent = "Scissors";
        image.src = "scissors.png";
        image.alt = "A pair of scissors.";
    }
}

function whenDidYouWinClicked(){

}

//onclicks

playButton.onclick = whenPlayButtonClicked;
didYouWin.onclick = whenDidYouWinClicked;