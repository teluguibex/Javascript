var MLI_ClassImpl = /** @class */ (function () {
    function MLI_ClassImpl() {
        this.varOne = "ReactJs";
        this.varTwo = "AngularJs";
        this.varThree = "NodeJs";
    }
    return MLI_ClassImpl;
}());
//Using JSON
var jObj = {
    varOne: "Spring Boot",
    varTwo: "Spring MVC",
    varThree: "Spring Boot & Microservices"
};
var mliObj = new MLI_ClassImpl();
console.log(mliObj.varOne, mliObj.varTwo, mliObj.varThree);
console.log(jObj.varOne, jObj.varTwo, jObj.varThree);
