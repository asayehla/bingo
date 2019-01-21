
var bingoNr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
var bingoGrid = bingoNr.sort(() => 0.5 - Math.random());

const bingo = document.getElementById('bingo');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
bingo.appendChild(grid);


bingoGrid.forEach(function(value, index) {
  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.dataset.name = index +1;

  const front = document.createElement('div');
  front.classList.add('front');
  front.innerHTML = index +1;

  var colors = ['red', 'green', 'blue', 'purple', 'yellow'];
  var randomColors = colors [Math.floor(Math.random()*5)];

  const back = document.createElement('div');
  back.classList.add('back');
  back.innerHTML = value;
  back.classList.add(randomColors);

  grid.appendChild(circle);
  circle.appendChild(front);
  circle.appendChild(back);


});


grid.addEventListener('click', event => {
const clicked = event.target;

if(clicked){
  firstNr = clicked.parentNode.dataset.name;
  clicked.parentNode.classList.add('selected');
  
}
})
