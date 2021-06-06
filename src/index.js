import './css/styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import ApiService from './js/apiService';
import createImgsCards from './templates/createImgsCards.hbs';
import LoadMoreBtn from './js/components/loadMoreBtn';

const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
const apiService = new ApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function onSearch(event) {
    event.preventDefault();

    apiService.word = event.currentTarget.elements.word.value;

    if (apiService.word === '') {
        return alert('Write your search');
    }

    loadMoreBtn.show();
    apiService.resetPage();
    clearImagesContainer();
    fetchImages();
};

function fetchImages() {
    loadMoreBtn.disable();
    apiService.fetchImages().then(images => {
        appendImagesMarkup(images);
        loadMoreBtn.enable();
    });
};

function appendImagesMarkup(images) {
    refs.gallery.insertAdjacentHTML('beforeend', createImgsCards(images));
};

function clearImagesContainer() {
    refs.gallery.innerHTML = '';
};

// const element = document.getElementById('.my-element-selector');
// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });
