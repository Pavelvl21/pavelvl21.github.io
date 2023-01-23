
const mql = window.matchMedia('(max-width: 962px)');
const menuItem = document.querySelectorAll('.menu__item');

const checkWidth = () => mql.matches
  ? menuItem.forEach((item) => item.setAttribute('href', `#${item.name}`))
  : menuItem.forEach((item) => item.setAttribute('href', '#'));

const fn = () => {
  checkWidth();
  window.addEventListener('resize', () => {
    checkWidth();
  })
}

fn();