import './styles/index.css';

function trafficLights() {
  const green = document.querySelector('#green');
  const red = document.querySelector('#red');
  const yellow = document.querySelector('#yellow');

  setTimeout(() => {
    green.classList.add('active');
    yellow.classList.add('inactive');
    red.classList.add('inactive');
  }, 0);

  setTimeout(() => {
    yellow.classList.replace('inactive', 'active');
    green.classList.replace('active', 'inactive');
  }, 2000);

  setTimeout(() => {
    yellow.classList.replace('active', 'inactive');
    red.classList.add('active');
  }, 5000);
}

trafficLights();
