import toggleAttr from './toggleAttr.js';
import setOption from './setOption.js';

const elements = {
  containerContet: [
    document.querySelector('.header'),
    ...document.querySelectorAll('.section'),
  ],
  overlay: {
    menu: document.querySelector('.nav-menu'),
    resume: document.querySelector('.resume'),
    sidebar: document.querySelector('.sidebar'),
  },
  buttonIcons: document.querySelectorAll('.nav-icon'),
  menuButton: document.querySelector('.nav-button'),
  links: document.querySelectorAll('.list-item'),
};

const handleClaccName = (cn, cl) => {
  cn.classList.toggle('nav-menu--hidden');
  cl.forEach((item) => item.classList.toggle('nav-icon--hidden'));
};

const handleLinks = ({ target }) => {
  elements.containerContet.forEach(setOption('--hidden'));
  const currentElement = document.querySelector(`#${target.name}`);
  if (target.name === 'resume' || target.name === 'about') {
    elements.containerContet.forEach(setOption());
  }
  setOption('--visible')(currentElement);
  handleClaccName(elements.overlay.menu, elements.buttonIcons);
};

export default () => {
  Object.values(elements.overlay).forEach((item) => {
    item.addEventListener('click', () => {
      handleClaccName(elements.overlay.menu, elements.buttonIcons);
    });
  });

  elements.links.forEach((link) => link.addEventListener('click', handleLinks));

  elements.menuButton.addEventListener('click', () => {
    handleClaccName(elements.overlay.menu, elements.buttonIcons);
  });

  toggleAttr();
};
