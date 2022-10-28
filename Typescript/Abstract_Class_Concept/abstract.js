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
var Abstract_Class_1 = /** @class */ (function () {
    function Abstract_Class_1() {
    }
    return Abstract_Class_1;
}());
var Abstract_Class_Impl = /** @class */ (function (_super) {
    __extends(Abstract_Class_Impl, _super);
    function Abstract_Class_Impl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.funOne = function () {
            return "My name is function four ..";
        };
        return _this;
    }
    return Abstract_Class_Impl;
}(Abstract_Class_1));
var aObj = new Abstract_Class_Impl();
console.log(aObj.funOne());
