import 'sanitize.css';
import './style.scss';

import { loadNav } from './load-nav.js';
import { loadHome } from './load-home.js';
import { loadMenu } from './load-menu.js';
import { loadContact } from './load-contact.js';

window.onload = () => {
  loadNav();
  loadHome();
};
