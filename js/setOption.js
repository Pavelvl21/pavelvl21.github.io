const classes = [
  'container-header',
  'container-section',
  'container-section--hidden',
  'container-section--visible',
  'container-header--hidden',
  'container-header--visible',
];

const setWipe = (element) => element.classList.remove(...classes);

export default (option = '') => (element) => {
  setWipe(element);
  if (element.classList.contains('header')) {
    element.classList.add(`container-header${option}`);
  }
  element.classList.add(`container-section${option}`);
};
