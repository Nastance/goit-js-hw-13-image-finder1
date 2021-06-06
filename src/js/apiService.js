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
        this.searchWord = '';
        this.page = 1;
    }

    fetchImages() {
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchWord}&page=${page}&per_page=${per_page}&key=${API_KEY}`;
       
        return fetch(url, options)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Fetching error');
            })
            .then(({ images }) => {
                console.log(images);
                this.incrementPage();
                return images;
            });
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get word() {
        return this.searchWord;
    }

    set word(newhWord) {
        this.searchWord = this.newhWord;
    }
}