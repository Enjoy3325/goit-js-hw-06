// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//  где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

// Ссылка на форму. Блок выборки элементов
const form = document.querySelector('.login-form');
console.log(form);
// Обработать input событие. Блок формы
form.addEventListener('submit', onFormSubmit);

//Сделаем внешнюю функцию и передаю ссылку onFormSubmit в форму form.addEventListener
function onFormSubmit(event) {
  event.preventDefault();

  const data = {
    email: event.target.elements.email.value,
    password: event.target.elements.password.value,
  };
  if (data.email !== '' && data.password !== '') {
    console.log(data);
    form.reset();
  } else {
    alert('Не всі поля заповненні');
  }

  //         console.log(emailValue);
  //   console.log(passwordValue);
}
