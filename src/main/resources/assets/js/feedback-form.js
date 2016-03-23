import Promise from 'promise-polyfill';
import 'whatwg-fetch';

export default class FeedbackForm {
    constructor() {
        this.$el = document.querySelector('.js-feedback-part');
        if(!this.$el) {
            return;
        }

        if(this.$el.classList.contains('mod-basic')) {
            require('../css/feedback-form.css'); // Include styles only if needed
        }

        this.$form = this.$el.querySelector('.js-feedback-form');
        this.$path = this.$form.querySelector('[name="path"]');
        this.$fields = [...this.$form.querySelectorAll('.js-feedback-field')];

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
        .then(() => this.$el.classList.add('is-submitted'));
    }
}
