const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

// Add event listener
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});       // Smile face 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let data = [
    {
      name: 'Batman',
      age: '41'
    },
    {
      name: 'WonderWoman',
      age: '38'
    },
    {
      name: 'SuperMan',
      age: '43'
    },
    {
      name: 'Flash',
      age: '27'
    },
    {
      name: 'GreenLantern',
      age: '38'
    },
    {
      name: 'Red Tornado',
      age: '00'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n'); ///           names of justic crew

/////////////////////////////////////////////////////////////////////////////////////////

const circle = document.querySelector('#circle');

circle.addEventListener('mouseenter', () => {
  if (!circle.classList.contains('hover')) {
    circle.classList.add('hover');
  }
});

circle.addEventListener('mouseleave', () => {
  if (circle.classList.contains('hover')) {
    circle.classList.remove('hover');
  }
}); //                                                                         bubble
////////////////////////////////////////////////////////////////////////////

const months = ['January', 'February', 'March', 'April']; // Array method

months.forEach(function(month) {
  console.log(month);
});


var dogs = Array("Bulldog", "Beagle", "Labrador");  // Array


dogs[0] = "Bull Terier"; 
console.log(dogs[1]);




let person = {                       //  object method 
  firstName: 'John',
  lastName: 'Doe',
  greet: function () {
      console.log('IS this right?');
  }
};


const persons = {                // object

  name: "Gabe",
  age: 40

}
console.log(persons); //                     object and array
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const n = 5;
for (let i = 1; i <= n; i++) {
    console.log(i);     // for you loop 
}


var count = 3; 
var i = 5;

while (count < 5) {              // while loop 
    let text = "";
console.log("im doing while loop");
console.log("javascript is hard");
count = count + 1;
text+="<br>Number of dogs is " + i;
i++;
}





const text = document.querySelector(".title");   // practice from video
const changeColor = document.querySelector("changeColor");
text.style.backgroundColor = "red";










const btn = document.querySelector('#btn');             // loop with color
btn.addEventListener('click', () => {
    const h1 = document.querySelector('h1');
    const colors = ['red', 'yellow', 'brown', 'green', 'blue']
    for (let i = 0; i < colors.length; i++) {
        h1.style.color = colors[i];

    }
});



const userlist = document.querySelectorAll('name-list li'); //user  list color 
console.log(userlist);
function myFunction(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById('name-list li').style.listStyleType = listValue;
  }

console.log;

const list = document.querySelector("name-list li");
const listItems = document.querySelector("name-list");



 


namelist.addeventListener("click",function(){
const newli = document.createElement("button");
const buttoncontent = document.createTextNode(listInput.value);
newbutton.appendChild(licontent);

userlist.appendChild(newbutton);

});


const listinput = document.querySelector(".listInput");
console.log(listinput.value);




document.getElementById(".namelist").style.backgroundColor = 'lightgreen';


const strawberry  = document.getElementById('strawberry');

strawberry.addEventListener('click', function onClick() {
  strawberry.style.backgroundColor = 'salmon';
  strawberry.style.color = 'white';
});


const chocolate = document.getElementById('chocolate');
chocolate.addEventListener('click', function onClick() {
    chocolate.style.backgroundColor = 'salmon';
    chocolate.style.color = 'brown';
  }); //                               LOOPS
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const age = 21;

  if (age >21){
  console.log("you are old enough to drink!");
  } else {
      console.log("you shouldn't be drinking");
  }
  
  var dice1 = 9;
  var dice2 = 5;
  
  if (dice1 === 9 && dice2 ===5){
      console.log("you got this!");
  } else {
      console.log("not today");
  }
  
  
  let myAge = 100;
  console.log("I am " + myAge + " years old.");
  
  let example1a = "abcdefg";
  let example1b = example1a.indexOf("abc");     
  let example1c = example1a.lastIndexOf("efg");  ////////////////        NUMBERS

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  const name = "Dev Ed";  




  function logger() {
      console.log("neverParty Time");
      console.log("neverParty Time");
      console.log("neverParty Time");
      console.log("neverParty Time");
  
      }
  
      logger();
  
  
      function adder(num1, num2, num3) {
          console.log(num1+num2+num3);
  
  
      }
  
  adder(5,10,10);
  
  
  const youtuber = "Traversy Media";
  
  function toUpper(text) {
      const upperCased = text.toUpperCase();
      console.log(upperCased);
  }
  
  toUpper(name);
  toUpper(youtuber);
  
  let carNames;
  
  function carNames =(firstname){
  alert(firstname + "niceCars");
  
  }
  
  firstname("chevy");
  firstname("toyota");
  firstname("camry");
  
  carNames();
  console.log;
  
  
  var score=0;
  console.log(score);
  score= 5;
  console.log(score);
  var score=10; 
  console.log(score);
  
  let scores =5;
  console.log(scores);
  
  
  function addpoints (num){
  score =score +num
  
  }
  addpoints(5);
  console.log///////////////////////////////////////////////////////          functions and parameters
  //////////////////////////////////////////////////////////////////////////////////


  var life = 100;// this is my life bar number

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


console.log(' hello is this right?') ;            ///////////            test
  
  
  




