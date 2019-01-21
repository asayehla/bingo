
var bingoNr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

var bingoGrid = bingoNr
.sort(() => 0.5 - Math.random());

const bingo = document.getElementById('bingo');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
bingo.appendChild(grid);

bingoGrid.forEach(function() {

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.dataset.name = name;

  grid.appendChild(circle);
/*
  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.innerHTML =`${bingoNr}`;

  circle.appendChild(front);
  circle.appendChild(back);
*/
});

/*grid.addEventListener('click', event => {
const clicked = event.target;

}*/
//if (clicked.nodeName === 'section')
