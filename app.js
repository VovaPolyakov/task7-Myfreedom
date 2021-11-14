// Задание 1

// Описать в html тег input и тег ul. 
// По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. 
// Содержимое li - нажатая клавиша.

// document.querySelector('button').addEventListener('click', function (event) {
//     let li = document.createElement('li');
//     let ul = document.querySelector('ul');
//     li.innerText = document.querySelector('input').value;
//     ul.appendChild(li);
// })





// Задание 2

// Вставить в html теги input и div(просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз,
// как только клиент вписывает любой символ в поле(или стирает любой символ из поля)


// document.querySelector('input').addEventListener('keyup', function (event) {
//     let p = document.createElement('p');
//     let div = document.querySelector('div');
//     p.innerText = event.key;
//     div.appendChild(p);
// })


// Задание 3
// Создать в html форму с инпутом и кнопкой. 
// акже добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. 
// Его содержимое - введенный текст. 
// После отправки формы инпут должен быть очищен (проставить пустую строку в value).

// const form = document.querySelector('form')
// const input = document.querySelector('input')

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li')
//     li.innerText = input.value;
//     ul.appendChild(li);
//     input.value = '';
// })

// Задание 4
// Простой калькулятор

// Создать в html форму с текстовым input, тегом select,
//  вторым текстовым input и кнопкой.Добавить в html div.
//  Опции select - арифметические знаки.В оба инпута пользователь вводит число.
//  Когда пользователь отправляет форму, над двумя числами выполняется действие,
//   выбранное в select.Результат отображается в div.
// 1) решить с помощью if-else
// 2) использовать для решения eval:

// const form = document.querySelector('form');
// const firstInp = document.querySelector('.first');
// const secondInp = document.querySelector('.second');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let numberOne = firstInp.value;
//     let numberTwo = secondInp.value;
//     let sign = document.querySelector('.select').value
//     let div = document.querySelector('div');
//     let p = document.createElement('p');
//     if (sign == '+') {
//         let answer = Number(numberOne) + Number(numberTwo);
//         p.innerText = innerText = answer;
//     } else if (sign == '-') {
//         let answer = Number(numberOne) - Number(numberTwo);
//         p.innerText = answer;
//     } else if (sign == '*') {
//         let answer = Number(numberOne) * Number(numberTwo);
//         p.innerText = answer;
//     } else if (sign == '/') {
//         let answer = Number(numberOne) / Number(numberTwo);
//         p.innerText = answer;
//     } else {
//         p.innerText = 'Ошибка';
//     }
//     div.appendChild(p);

// })


// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке).
//  При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. 
//  При выведении мышки за пределы кнопки, 
//  поворачивать кнопку на рандомный угол от -180 до 180 градусов. 
// Использовать обработку событий mouseenter, mouseleave на этой кнопке.


// const button = document.querySelector('button');
// function getRandomRGB() {
//     return `rgb(${getRandomArbitrary(0, 255)},${getRandomArbitrary(0, 255)},${getRandomArbitrary(0, 255)})`
// }
// button.addEventListener('mouseenter', function (event) {
//     button.style.background = getRandomRGB();
// });
// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * max);;
// }
// button.addEventListener('mouseleave', (event) => {
//     button.style.background = '';
//     button.style.transform = `rotate(${getRandomArbitrary(-180, 180)}deg)`;
// })
