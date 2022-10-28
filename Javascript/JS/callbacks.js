// function fun_one(param1){
//     console.log("In fun_one");
//     console.log(param1());
// }

// fun_one(
//     function fun_two(){
//     console.log("In fun_two");
//     return "Hello";
// });
  function demo(fun1, fun2) {
    console.log(fun1);
    return fun2("My Name Is Fun --- 02");
  }
  demo(function fun1() {
    return "My Name Is Fun --- 01";
  },
  function fun2(result) {
    console.log(result);
  })
  