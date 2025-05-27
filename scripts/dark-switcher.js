
export const pageStyle = () => {
document.addEventListener('DOMContentLoaded', () => {
  const icon = document.querySelector('#icon');
  const styleButton = document.querySelector('.menu__item-btn');
  let styleMode = localStorage.getItem('styleMode');

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
 };