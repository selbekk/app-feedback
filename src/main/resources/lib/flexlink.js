var portal = require('/lib/xp/portal');

exports.fromMixin = function(linkMixin) {
    if(!linkMixin) {
        return null;
    }

    var link = { label: linkMixin.label || '' };
    if(linkMixin.internalLink) {
        link.url = portal.pageUrl({id: linkMixin.internalLink});
    }
    else if(linkMixin.externalLink) {
        link.url = linkMixin.externalLink;
    }
    else {
        link.url = '';
    }

    if(linkMixin.appendage) {
        link.url += linkMixin.appendage;
    }
    return link;
};

exports.toUrl = function(idOrUrl) {
    if(!idOrUrl || idOrUrl.startsWith('/') || idOrUrl.startsWith('http')) {
        return idOrUrl;
    }

    return portal.pageUrl({id: idOrUrl});
};
