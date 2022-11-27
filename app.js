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


