const classes = [
  'container__header',
  'container__section',
  'container__section--hidden',
  'container__section--visible',
  'container__header--hidden',
  'container__header--visible',
];
const setWipe = (element) => element.classList.remove(...classes);

const setHidden = (element) => {
  setWipe(element);
  element.classList.contains('header')
    ? element.classList.add('container__header--hidden')
    : element.classList.add('container__section--hidden');
};

const setVisible = (element) => {
  setWipe(element);
  element.classList.contains('header')
    ? element.classList.add('container__header--visible')
    : element.classList.add('container__section--visible');
};
const setDefault = (element) => {
  setWipe(element);
  element.classList.contains('header')
    ? element.classList.add('container__header')
    : element.classList.add('container__section');
};

const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section');
const containerContet = [header, ...sections];

const cb = ({ target }) => {
  containerContet.forEach(setHidden);
  const currentElement = document.querySelector(`#${target.name}`);
  target.name === 'resume'
    ? containerContet.forEach(setDefault)
    : setVisible(currentElement);
};

const app = () => {
  const links = document.querySelectorAll('.menu__item');
  links.forEach((link) => link.addEventListener('click', cb));
};

app();
