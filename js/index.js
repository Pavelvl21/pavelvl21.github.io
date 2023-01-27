import toggleAttr from './toggleAttr.js';
import setOption from './setOption.js';

const elements = {
  containerContet: [
    document.querySelector('.header'),
    ...document.querySelectorAll('.section'),
  ],
  menu: document.querySelector('.nav-menu'),
  buttonIcons: document.querySelectorAll('.nav-icon'),
  menuButton: document.querySelector('.nav-button'),
  links: document.querySelectorAll('.list-item'),
};

const handleClassName = (cn, cl) => {
  cn.classList.toggle('nav-menu--hidden');
  cl.forEach((item) => item.classList.toggle('nav-icon--hidden'));
};

const handleLinks = ({ target }) => {
  elements.containerContet.forEach(setOption('--hidden'));
  const currentElement = document.querySelector(`#${target.name}`);
  if (target.name === 'resume' || target.name === 'about') {
    elements.containerContet.forEach(setOption());
  } else {
    setOption('--visible')(currentElement);
  }
  handleClassName(elements.menu, elements.buttonIcons);
};

export default () => {
  elements.links.forEach((link) => link.addEventListener('click', handleLinks));
  elements.menuButton.addEventListener('click', () => {
    handleClassName(elements.menu, elements.buttonIcons);
  });
  toggleAttr();
};
