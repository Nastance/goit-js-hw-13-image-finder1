import './css/styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchapiService from './js/apiService';
import createImgsCards from './templates/createImgsCards.hbs';

const element = document.getElementById('.my-element-selector');
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
