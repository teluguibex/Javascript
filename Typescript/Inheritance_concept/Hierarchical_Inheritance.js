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
var Parent_HieI = /** @class */ (function () {
    function Parent_HieI() {
        this.varOne_p = "My Name Is Hierarchical Inheritance ..";
    }
    return Parent_HieI;
}());
var Child_HieI_1 = /** @class */ (function (_super) {
    __extends(Child_HieI_1, _super);
    function Child_HieI_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.varChild1 = "My Name Is Child_One";
        return _this;
    }
    return Child_HieI_1;
}(Parent_HieI));
var Child_HieI_2 = /** @class */ (function (_super) {
    __extends(Child_HieI_2, _super);
    function Child_HieI_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.varChild1 = "My Name Is Child_Two";
        return _this;
    }
    return Child_HieI_2;
}(Parent_HieI));
var Child_HieI_3 = /** @class */ (function (_super) {
    __extends(Child_HieI_3, _super);
    function Child_HieI_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.varChild1 = "My Name Is Child_Three";
        return _this;
    }
    return Child_HieI_3;
}(Parent_HieI));
var objc_1 = new Child_HieI_1();
console.log(objc_1.varChild1, objc_1.varOne_p);
