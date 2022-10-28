var callback = function () {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(params[0]());
    console.log(params[1]());
};
callback(function () { return "Welcome ..."; }, function () { return "Hello ..."; });
