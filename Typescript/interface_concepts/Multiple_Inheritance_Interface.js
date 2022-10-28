var MI_ClassImpl = /** @class */ (function () {
    function MI_ClassImpl() {
        this.varOne = "RactJs";
        this.varTwo = "AngularJs";
        this.varThree = "NodeJs";
    }
    return MI_ClassImpl;
}());
var miJson = {
    varOne: "Hello_1",
    varTwo: "Hello_2",
    varThree: "Hello_3"
};
var miObj = new MI_ClassImpl();
console.log(miObj.varOne, miObj.varTwo, miObj.varThree);
console.log(miJson.varOne, miJson.varTwo, miJson.varThree);
