exports.formatEnv = function (obj) {
    const _temp = {};
    Object.keys(obj).forEach(function(key){
        _temp[key] = JSON.stringify(obj[key])

    })
    return _temp
}
