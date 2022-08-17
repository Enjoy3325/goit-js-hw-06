// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.

/* <input type="text" id="validation-input" data-length="6" 
placeholder="Please enter 6 symbols" />; */

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
// #validation-input {
//   border: 3px solid #bdbdbd;
// }
// #validation-input.valid {
//   border-color: #4caf50;
// }
// #validation-input.invalid {
//   border-color: #f44336;
// }

// Прописать focus событие
// Прописать blur событие,
// Сделать если не верно то бордер красный чисел 7 или до 6
// Если введенные числа 6 будет зелёным

// Блок Выборка элемментов
// let validation-input.valid = validInput;
// let validation-input.invalid = invalidInput;

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onTargetInputBlur);

function onTargetInputBlur(event) {
  // Чистим классы перед заходом в условие
  textInput.classList.remove('valid', 'invalid');
  if (Number(textInput.dataset.length) === event.target.value.length) {
    // Добавляю класс valid, если длинна значения подходит
    textInput.classList.add('valid');
  } else {
    //   Если длинна не верная больше или меньше длинны то условие сработает invalid
    textInput.classList.add('invalid');
  }

  console.log(Number(textInput.dataset.length));
  console.log(event.target.value.length);
}
