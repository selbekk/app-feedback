import Promise from 'promise-polyfill';
import 'whatwg-fetch';

export default class FeedbackForm {
    constructor() {
        this.$form = document.querySelector('.js-feedback-form');
        this.$path = this.$form.querySelector('[name="path"]');
        this.$fields = [...this.$form.querySelectorAll('.js-feedback-field')];

        if(!this.$form) {
            return;
        }

        this._initEvents();
    }

    _initEvents() {
        this.$form.addEventListener('submit', this._handleSubmit.bind(this));
    }

    _handleSubmit(e) {
        e.preventDefault();

        fetch(this.$form.action, {
            method: this.$form.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                path: this.$path.value,
                fields: this.$fields.map($field => ({
                    name: $field.name,
                    value: $field.value
                }))
            })
        })
        .then(response => response.json())
        .then(json => console.log(json));
    }
}
