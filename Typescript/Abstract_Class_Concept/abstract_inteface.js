var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abstract1 = /** @class */ (function () {
    function Abstract1() {
        this.welcome = function () {
            return "Welcome ...To ... Interface....";
        };
        this.hello = function () {
            console.log("My name is Hello ");
        };
    }
    return Abstract1;
}());
var Abstract2 = /** @class */ (function (_super) {
    __extends(Abstract2, _super);
    function Abstract2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hello1 = function () {
            return "My name is Hello...1";
        };
        return _this;
    }
    return Abstract2;
}(Abstract1));
var aObj2 = new Abstract2();
console.log(aObj2.hello(), aObj2.hello1());
