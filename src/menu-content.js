import { createMenuItem } from './create-menu-item';

import Ants from './images/ants.jpg';
import Clay from './images/clay.jpg';
import Leather from './images/leather.jpg';
import ToiletPaper from './images/toilet-paper.jpg';
import TreeBark from './images/tree-bark.jpg';
import Chalk from './images/chalk.jpg';

const menuItems = [
  createMenuItem('Chalk', Chalk, 'Good source of calcium.', '5.99'),
  createMenuItem('Tree Bark', TreeBark, 'Crunchy', '2.99'),
  createMenuItem('Leather', Leather, 'Tough to chew', '7.99'),
  createMenuItem(
    'Clay',
    Clay,
    'Moistened for sculpting before eating',
    '6.99'
  ),
  createMenuItem('Ants', Ants, 'Spicy', '4.99'),
  createMenuItem(
    'Toiler Paper',
    ToiletPaper,
    'Cleans on the way out',
    '1.99'
  ),
];

export function menuContent() {
  const heading = createHeading();
  const menuItems = createMenuItems();

  return [heading, menuItems];
}

function createHeading() {
  const heading = document.createElement('h1');
  heading.textContent = 'Menu';

  return heading;
}

function createMenuItems() {
  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.classList.add('menu-items');

  menuItems.forEach((menuItem) => {
    const title = document.createElement('h2');
    const image = document.createElement('img');
    const description = document.createElement('p');
    const price = document.createElement('span');
    const menuItemElement = document.createElement('div');

    title.textContent = menuItem.name;
    image.src = menuItem.image;
    description.textContent = menuItem.description;
    price.textContent = menuItem.price;

    menuItemElement.classList.add('menu-item');
    [title, image, description, price].forEach((element) => {
      menuItemElement.appendChild(element);
    });
    menuItemsContainer.appendChild(menuItemElement);
  });

  return menuItemsContainer;
}
