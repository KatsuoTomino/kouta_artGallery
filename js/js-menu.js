  const menu = document.querySelector('#menu'); 

  const lists = [
  {
    name: 'hoge',
    img: 'bg-main.jpg',
    price: 400,
    
  },
  {
    name: 'hoge',
    img: 'bg-main.jpg',
    price: 400,
    },
    {
    name: 'hoge',
    img: 'bg-main.jpg',
    price: 400,
    },
      {
    name: 'hoge',
    img: 'bg-main.jpg',
    price: 400,
    },
        {
    name: 'hoge',
    img: 'bg-main.jpg',
    price: 400,
    },
          {
    name: 'hoge',
    img: 'bg-main.jpg',
    price: 400,
  },
];

for(let i = 0; i < lists.length; i++){
    const name = lists[i].name;
    const img = lists[i].img;
    const price = lists[i].price;

    const content = `<div><img src="images/index/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
  }
    


