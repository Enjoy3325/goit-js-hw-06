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
