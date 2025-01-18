const items = document.querySelectorAll('.img-item')

for (let i = 0; i < items.length; i++) {
  const keyframe = {
    opacity: [0, 1],
    rotate: ['5deg', 0],
    scale: [1.1, 1],
  };
  const options = {
    duration: 2000,
    delay: i * 300,
    fill: 'forwards',

  };
  items[i].animate(keyframe, options);
}