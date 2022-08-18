const sliderControl = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

sliderControl.addEventListener('input', onSliderInput);

function onSliderInput(event) {
  // Спан стилі розмір тексту  = число яке ми отримали з input + px
  textSpan.style.fontSize = event.target.value + 'px';
  console.log(event.target.value);
}
