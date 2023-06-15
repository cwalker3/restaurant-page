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
  homeButton.onclick = '';
  homeButton.classList.add('active');

  menuButton.textContent = 'Menu';
  menuButton.onclick = '';

  contactButton.textContent = 'Contact';
  contactButton.onclick = '';

  return [homeButton, menuButton, contactButton];
}
