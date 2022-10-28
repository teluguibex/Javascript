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
/* Hierarchical Inheritance :
      We can create the multiple derived classes from one parent class.
 */
var Parent_HI = /** @class */ (function () {
    function Parent_HI() {
        this.varOne = "I am super parent ..";
    }
    return Parent_HI;
}());
var Child_One_HI = /** @class */ (function (_super) {
    __extends(Child_One_HI, _super);
    function Child_One_HI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child_One_HI;
}(Parent_HI));
var Child_Two_HI = /** @class */ (function (_super) {
    __extends(Child_Two_HI, _super);
    function Child_Two_HI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child_Two_HI;
}(Parent_HI));
var Child_Third_HI = /** @class */ (function (_super) {
    __extends(Child_Third_HI, _super);
    function Child_Third_HI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.varThree = _this.varOne;
        return _this;
    }
    return Child_Third_HI;
}(Parent_HI));
var cObj = new Child_Third_HI();
console.log(cObj.varOne, " ", cObj.varThree);
