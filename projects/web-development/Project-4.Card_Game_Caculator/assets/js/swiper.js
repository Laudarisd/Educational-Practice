const dots = document.querySelectorAll('.dot');
let index = 0;

setInterval(() => {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
  index = (index + 1) % dots.length; // Cycle through the dots
}, 3000); // The interval should match the duration of each slide
