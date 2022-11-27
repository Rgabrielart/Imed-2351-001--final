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




  


