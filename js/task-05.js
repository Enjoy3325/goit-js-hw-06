// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault()

// Вариант 1
// Ссылка на форму. Блок выборки элементов
let formInput = document.querySelector('#name-input');
let formOutput = document.querySelector('#name-output');
// // Обработать input событие. Блок формы
formInput.addEventListener('input', onFormInput);
// // Сделаем внешнюю функцию и передаю ссылку onFormInput в форму form.addEventListener
function onFormInput(event) {
  console.log(event.target.value);
  if (event.target.value === '') {
    formOutput.textContent = 'Anonymous';
  } else {
    formOutput.textContent = event.target.value;
  }
}

// Вариант 2

// let input = document.getElementById('name-input');
// let nameOutput = document.getElementById('name-output');

// input.oninput = function () {
//   if (input.value === '') {
//     nameOutput.innerHTML = 'Anonymous';
//   } else {
//     nameOutput.innerHTML = input.value;
//   }
// };
