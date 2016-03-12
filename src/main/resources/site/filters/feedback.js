var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var flexlink = require('/lib/flexlink');
var arrayUtil = require('/lib/array-util');

exports.responseFilter = function(req, res) {
    var siteConfig = portal.getSiteConfig();

    // Config
    var COOKIE_FEEDBACK_GIVEN = app.name + '_feedback-given';
    var COOKIE_FEEDBACK_REJECTED = app.name + '_feedback-rejected';
    var DAYS_BEFORE_ASKING_AGAIN = siteConfig.prompt.daysBeforeAskingAgain || 14;
    var DELAY_SECONDS = siteConfig.prompt.secondsBeforeShowing || 10;

    // Do not ask for feedback when in the content studio
    if(req.mode === 'edit') {
        return res;
    }

    // Do not ask for feedback if feedback has already been given or rejected
    if(req.cookies[COOKIE_FEEDBACK_GIVEN] || req.cookies[COOKIE_FEEDBACK_REJECTED]) {
        return res;
    }

    // Resolve the feedback view
    var view = resolve('feedback.html');

    var model = {
        layout: siteConfig.prompt.layout,
        theme: siteConfig.prompt.theme,
        intro: siteConfig.prompt.intro,
        link: flexlink.fromMixin(siteConfig.prompt.link),
        secondsDelay: DELAY_SECONDS,
        cookie: {
            given: COOKIE_FEEDBACK_GIVEN,
            rejected: COOKIE_FEEDBACK_REJECTED,
            daysUntilExpiration: DAYS_BEFORE_ASKING_AGAIN
        }
    };

    var html = thymeleaf.render(view, model);
    var js = '<script src="'+ portal.assetUrl({path: 'scripts.js'}) +'"></script>';

    // Normalize the pageContributions
    res.pageContributions.bodyEnd = arrayUtil.ensureArray(res.pageContributions);

    res.pageContributions.bodyEnd.push(html);
    res.pageContributions.bodyEnd.push(js);

    return res;
}
