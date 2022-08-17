const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];

// 0. Вытащить ul с помощью document.querySelector ()
// 1. Создать отдельный элемент
// 2. Использовать метод document.createElement().
// 3. Добавить название ингредиента как его текстовое содержимое.
// 4. Добавить элементу класс item.
// 5. Вставит все <li> за одну операцию в список ul#ingredients.



// console.log(list);

// 1) Создаём новый элемент "li"

// 

// 2) Добавил название ингредиента как его текстовое содержимое. через elem.textContent 

// Вариант 1

const list = document.querySelector('#ingredients');
const li = ingredients.map(element => {
  const item = document.createElement('li');
  // console.log(item)
  // console.log(element);
  item.classList.add('item');
  item.textContent = element;
  
  return item;
});
// console.log(li);

list.append(...li);
console.log(list);




// 3) Добавит элементу класс item

// Вариант 2
// const list = document.querySelector('#ingredients');
// for (let ingredient of ingredients) {
//   const item = document.createElement('li');
//   item.textContent = ingredient;
//   item.classList.add('item');
//   list.append(item);
// }
// console.log(list);

// Вариант 3 
// let list = document.querySelector('#ingredients');
// const foodIngredients = ingredients.forEach(ingredient => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   list.append(items);
//   parent.append(...items);
// });

// console.log(foodIngredients);