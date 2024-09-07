// Variables

let point1 = document.querySelector (".one-point-1");
let point2 = document.querySelector (".two-point-1");
let point3 = document.querySelector (".three-point-1");
let undo1 = document.querySelector (".undo-1");

let twoPoint1 = document.querySelector (".one-point-2");
let twoPoint2 = document.querySelector (".two-point-2");
let twoPoint3 = document.querySelector (".three-point-2");
let undo2 = document.querySelector (".undo-2");

let reset = document.querySelector (".reset");

let scoreHolder1 = document.querySelector (".scoreholder1");
let scoreHolder2 = document.querySelector (".scoreholder2");

let firstTeam = document.querySelector (".first-team");
let secondTeam = document.querySelector (".second-team");

let undoScore1 = 0;
let undoScore2 = 0;


score1 = 0;
score2 = 0;

// Functions

function whenLeftPoint1Clicked() {
  score1 = score1 + 1;
  undoScore1 = 1;
  if (score1 === 1) {
    scoreHolder1.textContent = 1;
  } if (score1 === 2) {
    scoreHolder1.textContent = 2;
  } if (score1 === 3) {
    scoreHolder1.textContent = 3;
  } if (score1 === 4) {
    scoreHolder1.textContent = 4;
  } if (score1 === 5) {
    scoreHolder1.textContent = 5;
  } if (score1 === 6) {
    scoreHolder1.textContent = 6;
  } if (score1 === 7) {
    scoreHolder1.textContent = 7;
  } if (score1 === 8) {
    scoreHolder1.textContent = 8;
  } if (score1 === 9) {
    scoreHolder1.textContent = 9;
  } if (score1 === 10) {
    scoreHolder1.textContent = 10;
  } if (score1 === 11) {
    scoreHolder1.textContent = 11;
    firstTeam.textContent = "Winner";
    secondTeam.textContent = "Loser";
  } 
}

function whenLeftPoint2Clicked(){
  score1 = score1 + 2;
  undoScore1 = 2;
  if (score1 === 1) {
    scoreHolder1.textContent = 1;
  } if (score1 === 2) {
    scoreHolder1.textContent = 2;
  } if (score1 === 3) {
    scoreHolder1.textContent = 3;
  } if (score1 === 4) {
    scoreHolder1.textContent = 4;
  } if (score1 === 5) {
    scoreHolder1.textContent = 5;
  } if (score1 === 6) {
    scoreHolder1.textContent = 6;
  } if (score1 === 7) {
    scoreHolder1.textContent = 7;
  } if (score1 === 8) {
    scoreHolder1.textContent = 8;
  } if (score1 === 9) {
    scoreHolder1.textContent = 9;
  } if (score1 === 10) {
    scoreHolder1.textContent = 10;
  } if (score1 === 11) {
    scoreHolder1.textContent = 11;
    firstTeam.textContent = "Winner";
    secondTeam.textContent = "Loser";
  }
}

function whenLeftPoint3Clicked(){
  score1 = score1 + 3;
  undoScore1 = 3;
  if (score1 === 1) {
    scoreHolder1.textContent = 1;
  } if (score1 === 2) {
    scoreHolder1.textContent = 2;
  } if (score1 === 3) {
    scoreHolder1.textContent = 3;
  } if (score1 === 4) {
    scoreHolder1.textContent = 4;
  } if (score1 === 5) {
    scoreHolder1.textContent = 5;
  } if (score1 === 6) {
    scoreHolder1.textContent = 6;
  } if (score1 === 7) {
    scoreHolder1.textContent = 7;
  } if (score1 === 8) {
    scoreHolder1.textContent = 8;
  } if (score1 === 9) {
    scoreHolder1.textContent = 9;
  } if (score1 === 10) {
    scoreHolder1.textContent = 10;
  } if (score1 === 11) {
    scoreHolder1.textContent = 11;
    firstTeam.textContent = "Winner";
    secondTeam.textContent = "Loser";
  }
}

function whenLeftUndo1Clicked(){
  score1 - undoScore1;
  if (score1-undoScore1 === 1) {
    scoreHolder1.textContent = 1;
    score1 = 1;
  } if (score1-undoScore1 === 2) {
    scoreHolder1.textContent = 2;
    score1 = 2;
  } if (score1-undoScore1 === 3) {
    scoreHolder1.textContent = 3;
    score1 = 3;
  } if (score1-undoScore1 === 4) {
    scoreHolder1.textContent = 4;
    score1 = 4;
  } if (score1-undoScore1 === 5) {
    scoreHolder1.textContent = 5;
    score1 = 5;
  } if (score1-undoScore1 === 6) {
    scoreHolder1.textContent = 6;
    score1 = 6;
  } if (score1-undoScore1 === 7) {
    scoreHolder1.textContent = 7;
    score1 = 7;
  } if (score1-undoScore1 === 8) {
    scoreHolder1.textContent = 8;
    screenLeftcore1 = 8;
  } if (score1-undoScore1 === 9) {
    scoreHolder1.textContent = 9;
    score1 = 9;
  } if (score1-undoScore1 === 10) {
    scoreHolder1.textContent = 10;
    score1 = 10;
  } 
}




function whenRightPoint1Clicked() {
  score2 = score2 + 1;
  undoScore2 = 1;
  if (score2 === 1) {
    scoreHolder2.textContent = 1;
  } if (score2 === 2) {
    scoreHolder2.textContent = 2;
  } if (score2 === 3) {
    scoreHolder2.textContent = 3;
  } if (score2 === 4) {
    scoreHolder2.textContent = 4;
  } if (score2 === 5) {
    scoreHolder2.textContent = 5;
  } if (score2 === 6) {
    scoreHolder2.textContent = 6;
  } if (score2 === 7) {
    scoreHolder2.textContent = 7;
  } if (score2 === 8) {
    scoreHolder2.textContent = 8;
  } if (score2 === 9) {
    scoreHolder2.textContent = 9;
  } if (score2 === 10) {
    scoreHolder2.textContent = 10;
  } if (score2 === 11) {
    scoreHolder2.textContent = 11;
    firstTeam.textContent = "Loser";
    secondTeam.textContent = "Winner";
  } 
}

function whenRightPoint2Clicked(){
  score2 = score2 + 2;
  undoScore2 = 2;
  if (score2 === 1) {
    scoreHolder2.textContent = 1;
  } if (score2 === 2) {
    scoreHolder2.textContent = 2;
  } if (score2 === 3) {
    scoreHolder2.textContent = 3;
  } if (score2 === 4) {
    scoreHolder2.textContent = 4;
  } if (score2 === 5) {
    scoreHolder2.textContent = 5;
  } if (score2 === 6) {
    scoreHolder2.textContent = 6;
  } if (score2 === 7) {
    scoreHolder2.textContent = 7;
  } if (score2 === 8) {
    scoreHolder2.textContent = 8;
  } if (score2 === 9) {
    scoreHolder2.textContent = 9;
  } if (score2 === 10) {
    scoreHolder2.textContent = 10;
  } if (score2 === 11) {
    scoreHolder2.textContent = 11;
    firstTeam.textContent = "Loser";
    secondTeam.textContent = "Winner";
  }
}

function whenRightPoint3Clicked(){
  score2 = score2 + 3;
  undoScore2 = 3;
  if (score2 === 1) {
    scoreHolder2.textContent = 1;
  } if (score2 === 2) {
    scoreHolder2.textContent = 2;
  } if (score2 === 3) {
    scoreHolder2.textContent = 3;
  } if (score2 === 4) {
    scoreHolder2.textContent = 4;
  } if (score2 === 5) {
    scoreHolder2.textContent = 5;
  } if (score2 === 6) {
    scoreHolder2.textContent = 6;
  } if (score2 === 7) {
    scoreHolder2.textContent = 7;
  } if (score2 === 8) {
    scoreHolder2.textContent = 8;
  } if (score2 === 9) {
    scoreHolder2.textContent = 9;
  } if (score2 === 10) {
    scoreHolder2.textContent = 10;
  } if (score2 === 11) {
    scoreHolder2.textContent = 11;
    firstTeam.textContent = "Loser";
    secondTeam.textContent = "Winner";
  }
}

function whenRightUndo2Clicked(){
  score2 - undoScore2;
  if (score2-undoScore2 === 1) {
    scoreHolder2.textContent = 1;
    score2 = 1;
  } if (score2-undoScore2 === 2) {
    scoreHolder2.textContent = 2;
    score2 = 2;
  } if (score2-undoScore2 === 3) {
    scoreHolder2.textContent = 3;
    score2 = 3;
  } if (score2-undoScore2 === 4) {
    scoreHolder2.textContent = 4;
    score2 = 4;
  } if (score2-undoScore2 === 5) {
    scoreHolder2.textContent = 5;
    score2 = 5;
  } if (score2-undoScore2 === 6) {
    scoreHolder2.textContent = 6;
    score2 = 6;
  } if (score2-undoScore2 === 7) {
    scoreHolder2.textContent = 7;
    score2 = 7;
  } if (score2-undoScore2 === 8) {
    scoreHolder2.textContent = 8;
    screenLeftcore2 = 8;
  } if (score2-undoScore2 === 9) {
    scoreHolder2.textContent = 9;
    score2 = 9;
  } if (score2-undoScore2 === 10) {
    scoreHolder2.textContent = 10;
    score2 = 10;
  }
}


function whenResetClicked(){
  score1 = 0;
  score2 = 0;
  scoreHolder1.textContent = 0;
  scoreHolder2.textContent = 0;
  firstTeam.textContent = "Team 1";
  secondTeam.textContent = "Team 2";
}
// Onclick

point1.onclick = whenLeftPoint1Clicked;
point2.onclick = whenLeftPoint2Clicked;
point3.onclick = whenLeftPoint3Clicked;
undo1.onclick = whenLeftUndo1Clicked;

twoPoint1.onclick = whenRightPoint1Clicked;
twoPoint2.onclick = whenRightPoint2Clicked;
twoPoint3.onclick = whenRightPoint3Clicked;
undo2.onclick = whenRightUndo2Clicked;

reset.onclick = whenResetClicked;


class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer__part--minutes"),
      seconds: root.querySelector(".timer__part--seconds"),
      control: root.querySelector(".timer__btn--control"),
      reset: root.querySelector(".timer__btn--reset")
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.reset.addEventListener("click", () => {
      const inputMinutes = prompt("Enter number of minutes:");

      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
      }
    });
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
      this.el.control.classList.add("timer__btn--start");
      this.el.control.classList.remove("timer__btn--stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
      this.el.control.classList.add("timer__btn--stop");
      this.el.control.classList.remove("timer__btn--start");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;

    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
      }
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateInterfaceControls();
  }

  static getHTML() {
    return `
			<span class="timer__part timer__part--minutes">00</span>
			<span class="timer__part">:</span>
			<span class="timer__part timer__part--seconds">00</span>
			<button type="button" class="timer__btn timer__btn--control timer__btn--start">
				<span class="material-icons">play_arrow</span>
			</button>
			<button type="button" class="timer__btn timer__btn--reset">
				<span class="material-icons">timer</span>
			</button>
		`;
  }
}

new Timer(
	document.querySelector(".timer")
);