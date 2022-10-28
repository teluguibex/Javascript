console.log("****************Parameter Without Args**************************");
function hello() : void{
    console.log("Hello !!!!");    
}
hello();
console.log("****************Parameter In Function**************************");
function funOne(param1 : number,param2 : number,...param3 : any) : void{
    console.log("Addition is : ", (param1 + param2),param3);    
}
funOne(10,20,"Hello",true,13.50,10);
console.log("*********************Default Parameters In Functions*********************");
//Introducted In ES6
function fun_two(param1 : string | number = "Hello",param2 : number | string = 10) : void{
    console.log("In funTwo : result : ",param1, param2);
}
// funTwo();
// funTwo(10,"Hello"); // Runtime error 
// funTwo(undefined,10); // Runtime error
fun_two(undefined,"null"); 
console.log("******************...(Spread Operator)************************");
/* ... Operator called as spread operator..
   ... Operator introduced in ES6 version.
   ...(Spread Operator) we have only on per function, We can't take more than one.
   ...(Spread Operator) always in last in parameters.
   (...Rest Operator)
*/
 function funThree(...param:any) : void{
    console.log(param[0],"=>",param);
 }
 funThree("Hello",10,10.5000000000,true);
 funThree(null,undefined);
console.log("******************Valid Fun Or  InValid Fun************************");
    // function funFive(...param1,...param2) : void{
    //     console.log(param1,param2);
    // }
    // funFive();
console.log("******************************************");
