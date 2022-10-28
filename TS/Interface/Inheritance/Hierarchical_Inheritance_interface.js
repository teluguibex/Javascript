console.log("----------------------------------------");
var dThreeObj = {
    varParent: "Parent ...",
    varDerievedThree: "Derieved_Three..."
};
console.log("Ojbect Three ", dThreeObj);
console.log("----------------------------------------");
var dTwoObj = {
    varParent: "Parent ...",
    varDerievedTwo: "Derieved _ Two ..."
};
console.log("Ojbect Two ", dTwoObj);
console.log("-------------------class---------------------");
var Derieved_One_Impl = /** @class */ (function () {
    function Derieved_One_Impl() {
        this.varParent = "One _ ParentVar";
        this.varDerievedOne = "One_DerivedOneVar ..";
    }
    return Derieved_One_Impl;
}());
var dOne = new Derieved_One_Impl();
console.log(dOne.varParent, dOne.varDerievedOne);
