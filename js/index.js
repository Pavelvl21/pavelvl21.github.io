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

const menu = document.querySelector('.side-menu');

const buttonIcons = document.querySelectorAll('.menu-icon');

const menuButton = document.querySelector('.menu-button');

const resume = document.querySelector('.resume');
const sidebar = document.querySelector('.sidebar');

const cb = ({ target }) => {
  containerContet.forEach(setHidden);
  const currentElement = document.querySelector(`#${target.name}`);
  target.name === 'resume' || target.name === 'about'
    ? containerContet.forEach(setDefault)
    : setVisible(currentElement);
  if (!menu.classList.contains('side-menu--hidden')) {
    menu.classList.add('side-menu--hidden');
    buttonIcons.forEach((button) =>
      button.classList.toggle('menu-icon--hidden')
    );
  } 
};

const app = () => {
  const overlay = [sidebar, resume, menu];
  overlay.forEach((item) => {
    item.addEventListener('click', () => {
      if (!menu.classList.contains('side-menu--hidden')) {
        menu.classList.add('side-menu--hidden');
        buttonIcons.forEach((button) =>
          button.classList.toggle('menu-icon--hidden')
        );
      }
    });
  })
  // resume.addEventListener('click', () => {
  //   if (!menu.classList.contains('menu--hidden')) {
  //     menu.classList.add('menu--hidden');
  //     buttonIcons.forEach((button) =>
  //       button.classList.toggle('menu-icon--hidden')
  //     );
  //   }
  // });

  const links = document.querySelectorAll('.menu__item');
  links.forEach((link) => link.addEventListener('click', cb));

  
  menuButton.addEventListener('click', () => {    
    buttonIcons.forEach((button) => button.classList.toggle('menu-icon--hidden'));
    menu.classList.toggle('side-menu--hidden');    
  });

  

};

app();
