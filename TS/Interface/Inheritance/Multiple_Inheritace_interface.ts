//Multiple Inheritance ...
interface Parent_One_MI {
    varOne :string;
}
interface Parent_Two_MI {
    varTwo : string;
}
interface Derived_MI extends Parent_One_MI, Parent_Two_MI {
}
class DerivedImpl implements Derived_MI {
  varOne: string; 
  varTwo : string;
  constructor(varOneArg: string,varTwoArg: string){
    this.varOne = varOneArg;
    this.varTwo = varTwoArg;
  }    
}
let dObj : DerivedImpl = new DerivedImpl("VarOne","VarTwo");
console.log(dObj.varOne ,dObj.varTwo);
console.log("----------------------JSON------------------------");

let dJson : DerivedImpl = {
    varOne : "JSON_VarOne",
    varTwo : "JSON_VarTwo"
}
console.log(dJson.varOne,dJson.varTwo);