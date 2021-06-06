const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21959567-f8bf3eb43bbee8865b9586c63';
const options = {
    headers: {
        Authorization: API_KEY,
    },
};
const per_page = 12;

// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${per_page}&key=${API_KEY}`;
       
        return fetch(url, options)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                    console.log(response.json());
                }
                throw new Error('Fetching error');
            })
            .then(({ elements }) => {
                console.log(elements);
                this.incrementPage();
                return elements;
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newhQuery) {
        this.searchQuery = this.newhQuery;
    }
}