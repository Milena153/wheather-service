function goToSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = 1200; 
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
  };



  document.addEventListener('DOMContentLoaded', () => {
  let styleMode = localStorage.getItem('styleMode');
  const icon = document.querySelector('#icon');

  const activateDarkStyle = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('styleMode', 'dark');
    if (icon) icon.src = './src/img/icons/sun.png';
  };

  const deactivateDarkStyle = () => {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('styleMode');
    if (icon) icon.src = './src/img/icons/moon_black.png';
  };

  const styleButton = document.querySelector('.menu__item-btn');
  if (styleButton) {
    styleButton.addEventListener('click', () => {
      styleMode = localStorage.getItem('styleMode');
      if (styleMode !== 'dark') {
        activateDarkStyle();
      } else {
        deactivateDarkStyle();
      }
    });
  }

  if (styleMode === 'dark') {
    activateDarkStyle();
  }
});