// Hierachical Interface
interface Parent_One_HI{
    varParent : string;
}
interface Derived_One_HI extends Parent_One_HI{
  varDerievedOne : string;
}
interface Derived_Two_HI extends Parent_One_HI{
    varDerievedTwo : string;
}
interface Derived_Three_HI extends Parent_One_HI{
    varDerievedThree : string;
}
console.log("----------------------------------------");

let dThreeObj : Derived_Three_HI = {
    varParent : "Parent ...",
    varDerievedThree : "Derieved_Three..."
}
console.log("Ojbect Three ",dThreeObj);
console.log("----------------------------------------");
let dTwoObj : Derived_Two_HI = {
    varParent : "Parent ...",
    varDerievedTwo : "Derieved _ Two ..."
}
console.log("Ojbect Two ",dTwoObj);

console.log("-------------------class---------------------");

class Derieved_One_Impl implements Derived_One_HI{
    varParent: string = "Parent Property";
    varDerievedOne : string ="Derived Inerface Property .."; 
}
let dOne : Derieved_One_Impl = new Derieved_One_Impl();
console.log(dOne.varParent,"",dOne.varDerievedOne);