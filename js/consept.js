const image = document.querySelector(".image");

const keyframe = {
  opacity: [0, 3]
};

const options = {
  duration: 3000,
  fill: 'forwards',
}

image.animate(keyframe, options);