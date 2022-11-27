const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

// Add event listener
closedFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});

openFace.addEventListener("click", () => {
  if (closedFace.classList.contains("closed")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active");
  }
}); // Smile face

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let data = [
  {
    name: "Batman",
    age: "41",
  },
  {
    name: "WonderWoman",
    age: "38",
  },
  {
    name: "SuperMan",
    age: "43",
  },
  {
    name: "Flash",
    age: "27",
  },
  {
    name: "GreenLantern",
    age: "38",
  },
  {
    name: "Red Tornado",
    age: "00",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n"); ///           names of justic crew

/////////////////////////////////////////////////////////////////////////////////////////

const circle = document.querySelector("#circle");

circle.addEventListener("mouseenter", () => {
  if (!circle.classList.contains("hover")) {
    circle.classList.add("hover");
  }
});

circle.addEventListener("mouseleave", () => {
  if (circle.classList.contains("hover")) {
    circle.classList.remove("hover");
  }
}); //                                                                         bubble
////////////////////////////////////////////////////////////////////////////

const months = ["January", "February", "March", "April"]; // Array method

months.forEach(function (month) {
  console.log(month);
});

var dogs = Array("Bulldog", "Beagle", "Labrador"); // Array

dogs[0] = "Bull Terier";
console.log(dogs[1]);

let person = {
  //  object method
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("IS this right?");
  },
};

const persons = {
  // object

  name: "Gabe",
  age: 40,
};
console.log(persons); //                     object and array
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const n = 5;
for (let i = 1; i <= n; i++) {
  console.log(i); // for you loop
}

var count = 3;
var i = 5;

while (count < 5) {
  // while loop
  let text = "";
  console.log("im doing while loop");
  console.log("javascript is hard");
  count = count + 1;
  text += "<br>Number of dogs is " + i;
  i++;
}

const text = document.querySelector("title"); // practice from video
const changeColor = document.querySelector("changeColor");
text.style.backgroundColor = "red";

const btn = document.querySelector("#btn"); // loop with color
btn.addEventListener("click", () => {
  const h1 = document.querySelector("h1");
  const colors = ["red", "yellow", "brown", "green", "blue"];
  for (let i = 0; i < colors.length; i++) {
    h1.style.color = colors[i];
  }
});

const userlist = document.querySelectorAll("name-list li"); //user  list color
console.log(userlist);
function myFunction(selectTag) {
  var listValue = selectTag.options[selectTag.selectedIndex].text;
  document.getElementById("name-list li").style.listStyleType = listValue;
}

console.log;

const list = document.querySelector("name-list li");
const listItems = document.querySelector("name-list");

namelist.addeventListener("click", function () {
  const newli = document.createElement("button");
  const buttoncontent = document.createTextNode(listinput.value);
  newbutton.appendChild(licontent);

  userlist.appendChild(newbutton);
});

const listinput = document.querySelector(".listInput");
console.log(listinput.value);

document.getElementById(".namelist").style.backgroundColor = "lightgreen";

const strawberry = document.getElementById("strawberry");

strawberry.addEventListener("click", function onClick() {
  strawberry.style.backgroundColor = "salmon";
  strawberry.style.color = "white";
});

const chocolate = document.getElementById("chocolate");
chocolate.addEventListener("click", function onClick() {
  chocolate.style.backgroundColor = "salmon";
  chocolate.style.color = "brown";
}); //                               LOOPS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const age = 21;

if (age > 21) {
  console.log("you are old enough to drink!");
} else {
  console.log("you shouldn't be drinking");
}

var dice1 = 9;
var dice2 = 5;

if (dice1 === 9 && dice2 === 5) {
  console.log("you got this!");
} else {
  console.log("not today");
}

let myAge = 100;
console.log("I am " + myAge + " years old.");

let example1a = "abcdefg";
let example1b = example1a.indexOf("abc");
let example1c = example1a.lastIndexOf("efg"); ////////////////        NUMBERS

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const names = "Dev Ed";

function logger() {
  console.log("neverParty Time");
  console.log("neverParty Time");
  console.log("neverParty Time");
  console.log("neverParty Time");
}

logger();

function adder(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

adder(5, 10, 10);

const youtuber = "Traversy Media";

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

toUpper(names);
toUpper(youtuber);

// let carNames;

let carNames = (firstname) => {
  alert(firstname + "niceCars");
};

firstname("chevy");
firstname("toyota");
firstname("camry");

carNames();
console.log;

var score = 0;
console.log(score);
score = 5;
console.log(score);
var score = 10;
console.log(score);

let scores = 5;
console.log(scores);

function addpoints(num) {
  score = score + num;
}
addpoints(5);
console.log; ///////////////////////////////////////////////////////          functions and parameters
//////////////////////////////////////////////////////////////////////////////////

var life = 100; // this is my life bar number

life = life - 10;

life = life - 10;

var name = "Dev Ed"; // this is the name displayed in the game string

var x = 2; // global variable

let a = 5; // math problem variable
let y = 2;
let z = a + y;

const F = 9; // variable using const

console.log(`${life} ${x} ${a} ${y} ${z} ${F}`); ///  variables

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(" hello is this right?"); ///////////            test

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game(); ///               rock paper scissors game

///////////////////////////////////////////////////////////////////////////////////////////////////////
