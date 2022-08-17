// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const sliderControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

sliderControl.addEventListener('input', onSliderInput);

function onSliderInput(event) {
  // Спан стилі розмір тексту  = число яке ми отримали з input + px
  textSpan.style.fontSize = event.target.value + 'px';
  console.log(event.target.value);
}
