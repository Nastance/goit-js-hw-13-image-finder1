export default class LoadMoreBtn {
    constructor({selector, hiddden = false}) {
        this.refs = this.getRefs(selector);

        hiddden && this.hide();
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector('.button');
        refs.spinner = document.querySelector('.spinner');
        refs.label = document.querySelector('.label');

        return refs;
        console.log(refs);
    }

    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Load more';
        this.refs.spinner.classList.add('is-hidden');
    }

    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading';
        this.refs.spinner.classList.remove('is-hidden');
    }

    show() {
        this.refs.button.classList.remove('is-hidden');
    }

    hide() {
        this.refs.button.classList.add('is-hidden');
    }
}
