function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnClick = document.querySelector('.change-color');
const spanClick = document.querySelector('.color');
const myBody = document.querySelector('body');

btnClick.addEventListener('click', onColorClick);

function onColorClick(e) {
  let color = getRandomHexColor();
  myBody.style.backgroundColor = color;
  spanClick.textContent = color;
  btnClick.style.background = getRandomHexColor();
}
