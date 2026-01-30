// script.js
const slider = document.querySelector('.slider');
let angle = 1;

// Rotate manually using left and right arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    angle -= 100; // Rotate clockwise
  } else if (e.key === 'ArrowRight') {
    angle += 100; // Rotate counter-clockwise
  }
  slider.style.transform = `rotateY(${angle}deg)`;
});

