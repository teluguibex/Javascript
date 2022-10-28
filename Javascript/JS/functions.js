// "use strict" 
//It is block of statement/code which reusable.
//Types :
   // Named Function
   // Anonymous Function ...(Arrow  & lambda function) 
   // Generator Function ..

// function funTwo(){
//     console.log("fun two ..");
// }
// funTwo();

//ES6 

// b = 40;
// console.log(b); 

//varibal hosting

// undefined, null, 0,false , ""
// let a = ""; 
// console.log(a);
// // if(a == undefined || a == null || a != false || a != 0 || a == ""){
// if(!a){ 
//   console.log("Not Allowed !!! ");
// }else {
//     console.log("Allowed !!!");
// }
//Note : A rest parameter must be last in a parameter list
let test  =  (...param) => {
    console.log(param[0] + param[1]);
    console.log("Hello , My Name is Anoymous function !!! ",param);
}
//    test(10,20);
// test(null);
// test("10");

//  Generator Function :
 // Control the flow of execution ....
 // This function declare with * symbol..
 //  we can use Yield keyword  for declare the statement.

 //example :
   function * funOne(){
    yield "Hello ...";
    yield "Hello 1 ...";
    yield "Hello 2  ...";
   }
   let cursor = funOne();
   for(let i = 0; i < 3;i++ ){
    console.log(cursor.next());
   }