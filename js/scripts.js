// Check JS is Connected
console.log('👍 JS Connected');

// Store Body Class
const beeGees = ['bg0', 'bg1', 'bg2'];

// Store Swoop profile images
const pics = [
  './img/swoop.webp',
  'img/swoop+2.webp',
  'img/swoop3.webp'
];

// Random number between 0 and the size of the array
const randNum = Math.floor( Math.random() * beeGees.length);

// Random number between 0 and the size of the array
const randNumPics = Math.floor( Math.random() * pics.length);

// GET the <body> element
const body = document.querySelector('body');

// Get the front face image
const frontImg = document.querySelector('.front img');

// SET the front face image
frontImg.src = pics[ randNum  ];

// SET or add the class to the body
body.classList.add( beeGees[randNum] );


document.querySelectorAll('.card').forEach(item => {
  // for each item i.e. card, do this
  item.addEventListener('click', event => {
    // toggle class on card
    item.classList.toggle('flipped');
  });
});