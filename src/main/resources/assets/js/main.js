import FeedbackPrompt from './feedback-prompt';
import FeedbackForm from './feedback-form';

function init() {
    const prompt = new FeedbackPrompt();
    const form = new FeedbackForm();
}

document.addEventListener('DOMContentLoaded', init);
