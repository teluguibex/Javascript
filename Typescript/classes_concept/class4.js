var Student_4 = /** @class */ (function () {
    function Student_4(studId, studName, studAdd) {
        this.studId = studId;
        this.studName = studName;
        this.studAdd = studAdd;
        this.sId = studId;
        this.sName = studName;
        this.sAdd = studAdd;
    }
    Student_4.prototype.readData = function () {
        return this.sId + " <==> " + this.sName + "<==>" + this.sAdd;
    };
    return Student_4;
}());
var obj_4_1 = new Student_4(101, "Goraksh Deshmukh", "Bengalore");
var obj_4_2 = new Student_4(102, "Sameer Deshmane", "Hydrabad");
console.log(obj_4_1.readData());
console.log(obj_4_2.readData());
