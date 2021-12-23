document.querySelector('#nextTest').addEventListener('click', function(event) {
    event.preventDefault();
    this.textContent = prompt('Введите новый текст!');
})