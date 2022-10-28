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
var Parent_MLI = /** @class */ (function () {
    function Parent_MLI(var_one) {
        this.varOne = "Hello_1";
        this.varOne = var_one;
    }
    Parent_MLI.prototype.getParentData = function () {
        return this.varOne;
    };
    return Parent_MLI;
}());
var Child_MLI = /** @class */ (function (_super) {
    __extends(Child_MLI, _super);
    function Child_MLI(var_two) {
        var _this = _super.call(this, "My Name Is Parent Constructor..") || this;
        _this.varTwo = "Hello_2";
        _this.varTwo = var_two;
        return _this;
    }
    Child_MLI.prototype.getChildData = function () {
        return this.varTwo;
    };
    return Child_MLI;
}(Parent_MLI));
var Super_Child_MLI = /** @class */ (function (_super) {
    __extends(Super_Child_MLI, _super);
    function Super_Child_MLI(var_three) {
        var _this = _super.call(this, "My Name Is Child Class Constructor ....") || this;
        _this.varThree = "Hello_3";
        _this.varThree = var_three;
        return _this;
    }
    Super_Child_MLI.prototype.getSuperChild = function () {
        return this.varThree;
    };
    return Super_Child_MLI;
}(Child_MLI));
var obj11 = new Super_Child_MLI("My Name Is Super Child Constructor ...");
console.log(obj11.getParentData(), obj11.getChildData(), obj11.getSuperChild());
