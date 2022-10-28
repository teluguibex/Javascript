var ClassOne = /** @class */ (function () {
    function ClassOne(subOne, subTwo, subThree) {
        var _this = this;
        this.details = function () {
            return _this.subOne + " <==> " + _this.subTwo + " <==> " + _this.subThree;
        };
        this.subOne = subOne,
            this.subTwo = subTwo,
            this.subThree = subThree;
    }
    return ClassOne;
}());
var d = new ClassOne("JavaScript", "Angular Js", "ReactJs");
console.log(d.details());
