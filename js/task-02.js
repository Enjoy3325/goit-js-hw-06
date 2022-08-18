const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

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
