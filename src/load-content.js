import { changeActiveTab } from './change-active-tab.js';

import { homeContent } from './home-content.js';
import { menuContent } from './menu-content.js';
import { contactContent } from './contact-content.js';

export function loadContent(event) {
  const button = event.target;
  const tab = button.dataset.button;
  const contentContainer = document.querySelector('.content');
  const content = getContent(tab);

  contentContainer.textContent = '';
  contentContainer.append(content);
  changeActiveTab(tab);
}

function getContent(tab) {
  const tabContainer = document.createElement('div');
  const functionName = `${tab}Content`;
  const content = contentFunction(tab);

  tabContainer.classList.add(tab);

  content.forEach((item) => {
    tabContainer.append(item);
  });

  return tabContainer;
}

function contentFunction(tab) {
  if (tab == 'home') {
    return homeContent();
  } else if (tab == 'menu') {
    return menuContent();
  } else if (tab == 'contact') {
    return contactContent();
  }
}
