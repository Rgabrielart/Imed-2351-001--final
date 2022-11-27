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




