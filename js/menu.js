const items = document.querySelectorAll('.header-img')

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    filter: ['blur(30px)', 'blur(0px)'],
  };
  const options = {
    duration: 1000,
    delay: i * 1000,
    fill: 'forwards',
  };
  items[i].animate(keyframes, options);
}


