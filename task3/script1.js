const trafficLight = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLight.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLight.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLight.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
}

trafficLight.addEventListener('click', makeGreen);