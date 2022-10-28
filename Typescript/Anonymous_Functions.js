console.log("*******************************************");
var fun_one = function (param1, param2) {
    console.log(param1, param2);
};
fun_one("Welcome !!!!", "Hello !!!!");
console.log("*******************************************");
var funTwo = function (param1, param2, param3) {
    console.log(param1, param2, param3);
};
funTwo(undefined, undefined, undefined);
funTwo(null, null, null);
console.log("*******************************************");
var funThrree = function (param1) {
    var param2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        param2[_i - 1] = arguments[_i];
    }
    console.log(param1, param2);
};
funThrree("Welcome !!!!", "Welcome !!!", 20, 35435.55, true);
console.log("**************Callback function*****************************");
function demo(param1, param2) {
    console.log(param1(), param2());
}
demo(function () { return "Hello !!!"; }, function () { return "Welcome !!!"; });
console.log("*******************************************");
var _success = function () {
    return "Success !!!";
};
var _error = function () { return "Error !!!"; };
var _network = function (param1, param2) {
    console.log(param1(), param2());
};
_network(_success, _error);
