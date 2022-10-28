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
    function Parent_SLI() {
        this.varOne = "My Name is Parent";
    }
    return Parent_SLI;
}());
var Child_SLI = /** @class */ (function (_super) {
    __extends(Child_SLI, _super);
    function Child_SLI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.varTwo = _this.varOne;
        return _this;
    }
    return Child_SLI;
}(Parent_SLI));
var childSLI = new Child_SLI();
console.log(childSLI.varTwo);
