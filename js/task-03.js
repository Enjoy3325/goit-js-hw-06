const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// создание элементов
const list = document.querySelector('.gallery');
const gallaryImage = images.map(image => {
  const photoE = `<li><img src=${image.url} alt=${image.alt} width=500, height=350 /></li>`;
  return photoE;
});

list.insertAdjacentHTML('beforeend', gallaryImage.join(''));

list.setAttribute('style', 'list-style-type:none; display: flex;');
