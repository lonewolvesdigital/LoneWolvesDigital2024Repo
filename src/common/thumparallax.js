import SimpleParallax from 'simple-parallax-js';

export const thumparallax = () => {
  var imageUp = document.getElementsByClassName("thumparallax");
  if (imageUp.length) {
    new SimpleParallax(imageUp, {
      orientation: "up",
      delay: 1,
      scale: 1.1,
    });
  }
};

export const thumparallaxDown = () => {
  var imageDown = document.getElementsByClassName("thumparallax-down");
  if (imageDown.length) {
    new SimpleParallax(imageDown, {
      orientation: "down",
      delay: 1,
      scale: 1.1,
    });
  }
};
