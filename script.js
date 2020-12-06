const panels = document.querySelectorAll('.panel');

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});

// let isFirstTime = true;
// setInterval(() => {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       removeActiveClass();
//       panels[i].classList.add('active');
//     }, 2000 * i);
//   }
// }, 10000);
