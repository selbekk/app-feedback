var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var arrayUtil = require('/lib/array-util');
var stringUtil = require('/lib/string-util');

function toFieldVo(field) {
    field.name = stringUtil.toSlug(field.label);
    return field;
}

exports.get = function (req) {
    var config = portal.getComponent().config;
    var content = portal.getContent();

    var view = resolve('feedback.html');

    var model = {
        serviceUrl: portal.serviceUrl({service: 'feedback'}),
        path: content._path,
        heading: config.heading,
        intro: config.intro,
        fields: arrayUtil.ensureArray(config.fields).map(toFieldVo),
        buttonText: config['button-text'],
        thankYouHeading: config['thank-you-heading'],
        thankYouText: config['thank-you-text']
    };

    var js = '<script src="'+ portal.assetUrl({path: 'scripts.js'}) +'"></script>';

    return {
        body: thymeleaf.render(view, model),
        pageContributions: {
            bodyEnd: js
        }
    };
}
