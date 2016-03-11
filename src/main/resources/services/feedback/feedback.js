var content = require('/lib/xp/content');

exports.post = function(req) {
    var data = JSON.parse(req.body);

    var entry = content.create({

        parentPath: data.path + '/feedback',
        contentType: app.name + ':feedback-item',
        displayName: 'Feedback item',
        data: {
            text: data.feedback,
            score: data.score
        }
    });

    return {
        body: JSON.stringify(entry),
        contentType: 'application/json'
    };
}
