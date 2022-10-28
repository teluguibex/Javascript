var namespace1;
(function (namespace1) {
    namespace1.varOne = "Welcome !!!!";
})(namespace1 || (namespace1 = {}));
/// <reference path="namespace1.ts" />
var namespace2;
(function (namespace2) {
    function getMsg() {
        return namespace1.varOne;
    }
    namespace2.getMsg = getMsg;
})(namespace2 || (namespace2 = {}));
console.log(namespace2.getMsg());
/// <reference path="namespace2.ts" />
var namespace3;
(function (namespace3) {
    var Demo = /** @class */ (function () {
        function Demo(arg1, arg2, arg3) {
            this.arg1 = arg1;
            this.arg2 = arg2;
            this.arg3 = arg3;
            this.subOne = arg1;
            this.subTwo = arg2;
            this.subThree = arg3;
        }
        Demo.prototype.getData = function () {
            return this.subOne + " <==> " + this.subTwo + " <==> " + this.subThree;
        };
        return Demo;
    }());
    namespace3.Demo = Demo;
})(namespace3 || (namespace3 = {}));
/// <reference path="namespace3.ts" />
var nObj = new namespace3.Demo("ReactJs", "NodeJs", "MongoDB");
console.log(nObj.getData());
// console.log(namespace2.getMsg());
