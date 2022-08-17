// 1 variant

// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);

// const categoriesArray = [...totalCategories]
//   .map(
//     categories => `Категорія: ${categories.children[0].textContent}
// Кількість елементів: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesArray);

// 2 Variant

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((item) => {
    console.log(
        'Category: ', item.querySelector("h2").textContent);
    console.log('Elements', item.querySelectorAll('li').length);
}) 