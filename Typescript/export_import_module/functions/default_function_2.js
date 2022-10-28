"use strict";
exports.__esModule = true;
/* exported functions we can import using below two ways....
    import { dFunOne,dFunTwo,dFunThree } from "./default_function_1";
    import * as funs  from "./default_function_1";
 */
/* exported with default functions we can import using below  ways....
 */
var default_function_1_1 = require("./default_function_1");
console.log("dFunOne_default : ", default_function_1_1["default"].dFunOne());
console.log("dFunTwo_default : ", default_function_1_1["default"].dFunTwo());
console.log("dFunThree_default : ", default_function_1_1["default"].dFunThree());
