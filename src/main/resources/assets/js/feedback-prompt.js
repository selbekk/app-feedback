import cookie from 'cookie-cutter';
import '../css/feedback-prompt.css';

export default class FeedbackPrompt {
    constructor() {
        this.$el = document.querySelector('.js-feedback-prompt');
        if(!this.$el) {
            return;
        }

        this.$close = this.$el.querySelector('.js-close-feedback');
        this.$giveFeedback = this.$el.querySelector('.js-give-feedback');

        this.config = window.__FEEDBACK_PROMPT__;
        this.cookie = cookie(document);

        this._initEvents();
        setTimeout(this._show.bind(this), this.config.secondsDelay * 1000);
    }

    _initEvents() {
        this.$close.addEventListener('click', this._close.bind(this));
        this.$giveFeedback.addEventListener('click', this._setCookie.bind(this, this.config.givenCookieName))
    }

    _show() {
        this.$el.classList.add('is-visible');
    }

    _close() {
        this._setCookie(this.config.rejectedCookieName);
        this.$el.classList.remove('is-visible');
    }

    _setCookie(cookieName) {
        let expires = new Date();
        expires.setDate(expires.getDate() + this.config.daysUntilExpiration);
        this.cookie.set(cookieName, true, { expires: expires.toUTCString() });
    }
}
