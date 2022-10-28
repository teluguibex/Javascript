var DerivedImpl = /** @class */ (function () {
    function DerivedImpl(varOneArg, varTwoArg) {
        this.varOne = varOneArg;
        this.varTwo = varTwoArg;
    }
    return DerivedImpl;
}());
var dObj = new DerivedImpl("VarOne", "VarTwo");
console.log(dObj.varOne, dObj.varTwo);
console.log("----------------------JSON------------------------");
var dJson = {
    varOne: "JSON_VarOne",
    varTwo: "JSON_VarTwo"
};
console.log(dJson.varOne, dJson.varTwo);
