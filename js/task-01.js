const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(item => {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements', item.querySelectorAll('li').length);
});
