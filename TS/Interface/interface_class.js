var Demo = /** @class */ (function () {
    function Demo() {
        this.subOne = "ReactJs";
        this.subTwo = "NodeJs";
        this.subThree = "MongoDB";
    }
    return Demo;
}());
var dObj = new Demo();
console.log(dObj.subOne + "<==>" + dObj.subTwo + "<==>" + dObj.subThree);
