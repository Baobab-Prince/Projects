const burgerMenu = document.querySelector('.navbar__bars');
const openMenu = document.querySelector('.navbar__menu');
const mainMenu = document.querySelector('.navbar__menu--links');

openMenu.addEventListener('click', show);
burgerMenu.addEventListener('click', close);

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}
