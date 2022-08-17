// 1) Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// 2) Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// 3) Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// 4) бновляй интерфейс новым значением переменной counterValue.

// По кроково
// 1) Роблю змінну для span знаходимо один елемент,
//    через метод = document.querySelector()
// 2) Знаходжу активну кнопку +1 increment,
// через  массив від data-action=[]
// 3) Знаходжу активну кнопку -1 decremen,
// через  массив від data-action=[]
// 4) Записую counterValue початок числа з 0
// 5) Потрібно оформити слухачі на кнопках через елемент.addEventListener()
// 6) Зробити заміну щоб на increment додавало +1 і decrement -1 числа і додати textContent

//  Варіант 1

const value = document.querySelector('#value');
console.log(value);

const increment = document.querySelector("[data-action='increment']");
console.log(increment);

const decrement = document.querySelector("[data-action='decrement']");
console.log(decrement);

let counterValue = 0;

increment.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decrement.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

// const value = document.querySelector('#value');
// const increment = document.querySelector("[data-action='increment']");
// const decrement = document.querySelector("[data-action='decrement']");

// console.log(value);
// let counterValue = 0;
// // Слушатель +1

// increment.addEventListener('click', () => {
//   // Тут потрібно змінити значення value!
//   counterValue += 1;
//   value.textContent = counterValue;

//   console.log();
// });
// // Слушатель -1
// decrement.addEventListener('click', () => {
//   // Тут потрібно змінити значення value!
//   counterValue -= 1;
//   value.textContent = counterValue;
//   console.log('Меньше');
// });

// function targetButtonClickHandler() {
//   console.log('Click');
// }

// Варіант 2
// const button = {
//   sub: document.querySelector("[data-action='increment']"),
//   add: document.querySelector("[data-action='decrement']"),
//   span: document.querySelector("#value"),
// };

// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;

//  button.span.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   button.span.textContent = counterValue;
// };

// button.sub.addEventListener("click", increment);
// button.add.addEventListener("click", decrement);
