import { loadContent } from './load-content.js';

export function loadNav() {
  const nav = createNav();

  document.body.prepend(nav);
}

function createNav() {
  const nav = document.createElement('nav');
  const navList = createNavList();

  nav.append(navList);

  return nav;
}

function createNavList() {
  const navList = document.createElement('ul');
  const buttons = createButtons();

  buttons.forEach((button) => {
    const listItem = document.createElement('li');
    listItem.append(button);
    navList.append(listItem);
  });

  return navList;
}

function createButtons() {
  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const contactButton = document.createElement('button');

  homeButton.textContent = 'Home';
  homeButton.onclick = loadContent;
  homeButton.classList.add('home-button');
  homeButton.dataset.button = 'home';

  menuButton.textContent = 'Menu';
  menuButton.onclick = loadContent;
  menuButton.classList.add('menu-button');
  menuButton.dataset.button = 'menu';

  contactButton.textContent = 'Contact';
  contactButton.onclick = loadContent;
  contactButton.classList.add('contact-button');
  contactButton.dataset.button = 'contact';

  return [homeButton, menuButton, contactButton];
}
