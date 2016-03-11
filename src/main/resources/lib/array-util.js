exports.ensureArray = function(obj) {
    // If it's already an array, return it
    if(Array.isArray(obj)) {
        return obj;
    }

    // If falsy (null, undefined, empty string) but not the number 0,
    // return empty array
    if(obj !== 0 && !obj) {
        return [];
    }

    // Finally return the arrayed object (or string or whatevz)
    return [ obj ];
}
