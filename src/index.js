import 'sanitize.css';
import './style.scss';

import { loadNav } from './load-nav.js';

window.onload = () => {
  loadNav();
  document.querySelector('.home-button').click();
};
