var content = require('/lib/xp/content');
var context = require('/lib/xp/context');

function saveFeedback(data) {
    return content.create({
        parentPath: data.path,
        contentType: app.name + ':feedback-response',
        displayName: 'Feedback response',
        data: {
            text: data.feedback,
            score: data.score
        }
    });
}

exports.post = function(req) {
    var data = JSON.parse(req.body);

    var entry = context.run({
        branch: 'draft',
        user: {
            login: 'su',
            userStore: 'system'
        }
    }, saveFeedback.bind(this, data));

    return {
        body: JSON.stringify(entry),
        contentType: 'application/json'
    };
}
