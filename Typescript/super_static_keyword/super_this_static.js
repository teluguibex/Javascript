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
var SuperParent = /** @class */ (function () {
    function SuperParent(param1) {
        console.log("spOne : ", "In constructor ..", param1);
    }
    SuperParent.prototype.spOne = function (param) {
        console.log("spOne : ", "In spOne ..", param);
    };
    return SuperParent;
}());
var SuperChild = /** @class */ (function (_super) {
    __extends(SuperChild, _super);
    function SuperChild() {
        return _super.call(this, "My name is super parent constructor...") || this;
    }
    SuperChild.prototype.scOne = function (param) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.spOne("my name is super parent ..");
        console.log("scOne : ", param, params);
    };
    return SuperChild;
}(SuperParent));
var scOneObj = new SuperChild();
scOneObj.scOne("Hello", 12, "Sting", true, 34324.45645654);
