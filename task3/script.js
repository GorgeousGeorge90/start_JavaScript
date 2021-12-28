const parent = document.querySelector('.parent');
const child = document.querySelectorAll("#trafficLight");

parent.onclick = function (event) {
    if (event.target == parent ) {
    return;
    } else if (event.target == child[0]) {
        event.target.style.backgroundColor = 'green'
        child[1].style.backgroundColor = 'black'
        child[2].style.backgroundColor = 'black' 
    } else if (event.target == child[1]) {
        event.target.style.backgroundColor = 'yellow'
        child[0].style.backgroundColor = 'black'
        child[2].style.backgroundColor = 'black' 
    } else if (event.target == child[2]) {
        event.target.style.backgroundColor = 'red'
        child[0].style.backgroundColor = 'black'
        child[1].style.backgroundColor = 'black' 
    };
};