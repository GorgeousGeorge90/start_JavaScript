document.querySelector('#consoleLog').addEventListener('click', function() {
    alert("Метод для вывода сообщений в консоль!")
})

document.querySelector('.test1').addEventListener('click', function() {
    this.textContent = "console.log('текст,выведенный в консоль')"
})

document.querySelector('#alert').addEventListener('click', function() {
    alert("Метод для вывода окна с сообщением на экран!")
})

document.querySelector('.test2').addEventListener('click', function() {
    this.textContent = "alert('сообщение в окне, выведенное на экран')"
})

document.querySelector('#prompt').addEventListener('click', function() {
    alert("Метод для запроса данныху пользователя!")
})

document.querySelector('.test3').addEventListener('click', function() {
    this.textContent = "prompt('окно, для ввода данных пользователя')"
})