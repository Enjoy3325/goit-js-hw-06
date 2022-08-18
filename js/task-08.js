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
}
