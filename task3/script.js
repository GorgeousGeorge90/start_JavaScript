const parent = document.querySelector('.parent');
const child = document.querySelectorAll("#trafficLight");

parent.onclick = function (event) {
    if (event.target == parent ) {
    return;
    } else if (event.target == child[0]) {
        event.target.style.background = ('green');
        child[1].style.background = ('black');
        child[2].style.background = ('black'); 
    } else if (event.target == child[1]) {
        event.target.style.background = ('yellow');
        child[0].style.background = ('black');
        child[2].style.background = ('black');
    } else if (event.target == child[2]) {
        event.target.style.background = 'red'
        child[0].style.background = ('black');
        child[1].style.background = ('black'); 
   };
};

// Закомментирован вариант стандартного исполнения
// const trafficLight = document.querySelector('#trafficLight');

// function makeGreen() {
//     trafficLight.style.background = ('green');
//     trafficLight.removeEventListener('click', makeGreen);
//     trafficLight.addEventListener('click', makeYellow);
// }

// function makeYellow() {
//     trafficLight.style.background = ('yellow');
//     trafficLight.removeEventListener('click', makeYellow);
//     trafficLight.addEventListener('click', makeRed);
// }

// function makeRed() {
//     trafficLight.style.background = ('red');
//     trafficLight.removeEventListener('click', makeRed);
//     trafficLight.addEventListener('click', makeGreen);
// }

// trafficLight.addEventListener('click', makeGreen)