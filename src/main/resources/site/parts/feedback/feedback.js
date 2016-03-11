var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function (req) {
    var config = portal.getComponent().config;
    var content = portal.getContent();
    log.info(JSON.stringify(content, null, 4));

    var view = resolve('feedback.html');

    var model = {
        serviceUrl: portal.serviceUrl({service: 'feedback'}),
        path: content._path,
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
