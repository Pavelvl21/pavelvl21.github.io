const mql = window.matchMedia('(max-width: 962px)');
const menuItem = document.querySelectorAll('.list-item');

const checkWidth = () => (mql.matches
  ? menuItem.forEach((item) => item.setAttribute('href', `#${item.name}`))
  : menuItem.forEach((item) => item.setAttribute('href', '#')));

export default () => {
  checkWidth();
  window.addEventListener('resize', () => {
    checkWidth();
  });
};
