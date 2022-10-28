var Class_One = /** @class */ (function () {
    function Class_One() {
    }
    Class_One.prototype.msg = function () {
        return "Welcome To Typescirpt";
    };
    return Class_One;
}());
var Class_Two = /** @class */ (function () {
    function Class_Two(obj) {
        this.obj = obj;
    }
    return Class_Two;
}());
var obj1 = new Class_Two(new Class_One());
console.log(obj1.obj.msg());
