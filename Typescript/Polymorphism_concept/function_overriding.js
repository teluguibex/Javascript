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
/* Note :
    Override the parent class functionality with child class functionality
    is called as function overriding.
 */
var Parent_DB = /** @class */ (function () {
    function Parent_DB() {
    }
    Parent_DB.prototype.dbFun = function () {
        return "Data come from oracle datbase .....soon";
    };
    return Parent_DB;
}());
var Child_DB = /** @class */ (function (_super) {
    __extends(Child_DB, _super);
    function Child_DB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child_DB.prototype.dbFun = function () {
        return "Data come from MongoDB datbase .....soon";
    };
    return Child_DB;
}(Parent_DB));
var cObj = new Child_DB();
console.log(cObj.dbFun());
