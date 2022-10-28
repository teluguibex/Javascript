var ClassOne = /** @class */ (function () {
    function ClassOne() {
    }
    ClassOne.prototype.add = function (varOne, varTwo) {
        console.log(varOne + varTwo);
    };
    return ClassOne;
}());
var objClassOne = new ClassOne();
objClassOne.add("Hello_1 ", " Hello_2");
objClassOne.add(10, 20);
