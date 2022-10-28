//1> Named Functions..
function funOne(param, param2) {
    console.log(param + param2);
}
funOne(10, 20);
//2> Anonymous/Arrow/Lambda Functions
var funOne1 = function (param1, param2) {
    console.log(param1, param2);
};
funOne1("Hello ..1", "Hello ..2");
//Default Parameter : Introducted in ES6 version.
var funTwo = function (arg1, arg2, arg3) {
    if (arg3 === void 0) { arg3 = "Welcome ..."; }
    var arg4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        arg4[_i - 3] = arguments[_i];
    }
    console.log(arg1, arg2, arg3);
    console.log("arg4 ", arg4);
};
funTwo("A", "B", "C", 10, "string", true, 34423.34234);
