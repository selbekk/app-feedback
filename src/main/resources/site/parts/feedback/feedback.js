var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function (req) {
    var config = portal.getComponent().config;
    var site = portal.getSite();

    var view = resolve('feedback.html');

    var model = {
        serviceUrl: portal.serviceUrl({service: 'feedback'}),
        path: site._path,
        heading: config.heading,
        intro: config.intro,
        feedbackPlaceholder: config['feedback-placeholder'],
        buttonText: config['button-text'],
    };

    var js = '<script src="'+ portal.assetUrl({path: 'scripts.js'}) +'"></script>';

    return {
        body: thymeleaf.render(view, model),
        pageContributions: {
            bodyEnd: js
        }
    };
}
