console.log("****************Parameter Without Args**************************");
function hello() {
    console.log("Hello !!!!");
}
hello();
console.log("****************Parameter In Function**************************");
function funOne(param1, param2) {
    var param3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        param3[_i - 2] = arguments[_i];
    }
    console.log("Addition is : ", (param1 + param2), param3);
}
funOne(10, 20, "Hello", true, 13.50, 10);
console.log("*********************Default Parameters In Functions*********************");
//Introducted In ES6
function fun_two(param1, param2) {
    if (param1 === void 0) { param1 = "Hello"; }
    if (param2 === void 0) { param2 = 10; }
    console.log("In funTwo : result : ", param1, param2);
}
// funTwo();
// funTwo(10,"Hello"); // Runtime error 
// funTwo(undefined,10); // Runtime error
fun_two(undefined, "null");
console.log("******************...(Spread Operator)************************");
/* ... Operator called as spread operator..
   ... Operator introduced in ES6 version.
   ...(Spread Operator) we have only on per function, We can't take more than one.
   ...(Spread Operator) always in last in parameters.
*/
function funThree() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    console.log(param[0], "=>", param);
}
funThree("Hello", 10, 10.5000000000, true);
funThree(null, undefined);
console.log("******************************************");
