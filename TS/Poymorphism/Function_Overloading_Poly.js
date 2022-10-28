/* Defination:
       It Behave like many is called as polymorphism.
       It has two types :
        -- Function Overloading..
        -- Function Overriding ..
*/
var FunctionOverloading = /** @class */ (function () {
    function FunctionOverloading() {
    }
    FunctionOverloading.prototype.add = function (arg1, arg2) {
        console.log(arg1 + arg2);
    };
    return FunctionOverloading;
}());
var flObj = new FunctionOverloading();
flObj.add("Ram", "Sham");
flObj.add(10, 20);
