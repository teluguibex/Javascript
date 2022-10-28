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
var Parent_SLI = /** @class */ (function () {
    function Parent_SLI(varOneData) {
        this.varOneData = varOneData;
        this.varOne = varOneData;
    }
    Parent_SLI.prototype.getParentData = function () {
        return this.varOne;
    };
    return Parent_SLI;
}());
var Child_SLI = /** @class */ (function (_super) {
    __extends(Child_SLI, _super);
    function Child_SLI(varTwoData) {
        var _this = _super.call(this, "Parenttttttt") || this;
        _this.varTwoData = varTwoData;
        _this.varTwo = _this.varTwoData;
        return _this;
    }
    Child_SLI.prototype.getChildData = function () {
        return this.varTwo;
    };
    return Child_SLI;
}(Parent_SLI));
var obj1 = new Parent_SLI("My Name is Parent ....");
console.log(obj1.getParentData());
var obj2 = new Child_SLI("My Name is Child One ....");
console.log("Child ... ", obj2.getChildData(), " ", obj2.getParentData());
