/* exported functions we can import using below two ways....
    import { dFunOne,dFunTwo,dFunThree } from "./default_function_1";
    import * as funs  from "./default_function_1";
 */
/* exported with default functions we can import using below  ways....
 */
 import funs  from "./default_function_1"; // exported as default

 console.log("dFunOne_default : ",funs.dFunOne());
 console.log("dFunTwo_default : ",funs.dFunTwo());
 console.log("dFunThree_default : ",funs.dFunThree());
 