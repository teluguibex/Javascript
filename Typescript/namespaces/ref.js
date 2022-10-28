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
