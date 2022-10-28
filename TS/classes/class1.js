/* *** class : Collection of variables and functions is called as class.
               We can create the object of class using the new keyword.
               class & new both are predefined keyword.
*** Modifiers :
            public    : used for functions.
            private   :  used for variables.
            protected : used for both.
    Note :
    constructor :
        "We will create the constructor using 'constructor' keyword."
*/
var Student = /** @class */ (function () {
    function Student(sIdArg, sNameArg, sAddArg, sMarksArg) {
        var _this = this;
        this.sIdArg = sIdArg;
        this.sNameArg = sNameArg;
        this.sAddArg = sAddArg;
        this.sMarksArg = sMarksArg;
        this.getStudDetails = function () {
            console.log(_this.sId + " <==> " + _this.sName + " <==> " + _this.sAdd + " <==> " + _this.sMarks);
        };
        this.sId = sIdArg;
        this.sName = sNameArg;
        this.sAdd = sAddArg;
        this.sMarks = sMarksArg;
    }
    return Student;
}());
//crate the object ..
var studObj1 = new Student(100, "Ram", "Hyd", 78);
studObj1.getStudDetails();
