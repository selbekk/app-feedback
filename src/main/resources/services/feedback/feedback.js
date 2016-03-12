var content = require('/lib/xp/content');
var context = require('/lib/xp/context');

function saveFeedback(data) {

    return content.create({
        parentPath: data.path,
        contentType: app.name + ':feedback-response',
        displayName: 'Feedback response',
        data: {
            fields: data.fields
        }
    });
}

exports.post = function(req) {
    var fields = JSON.parse(req.body);

    var entry = context.run({
        branch: 'draft',
        user: {
            login: 'su',
            userStore: 'system'
        }
    }, saveFeedback.bind(this, fields));

    return {
        body: JSON.stringify(entry),
        contentType: 'application/json'
    };
}
