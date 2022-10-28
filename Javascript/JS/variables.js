//10-Jan-2022
var sub_one = "ReactJs";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mern_stack = `${sub_one} <<===>> ${sub_two} <<===>> ${sub_three}`;
console.log(mern_stack);

var decimal_num = 100;
var double_num = 100.12345;
var hexedecimal_num = 0x1234ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log(decimal_num, double_num, hexedecimal_num, octal_num, binary_num);

var flag = true;
var flag1 = false;
console.log(flag, flag1);

//arary declaration ...
var arr = [100, 200, 300, 400, 500];

//old syntax
arr.forEach(function (element, index, array) {  // namesless or annonimous function
    console.log(element, index, array);
});
console.log("Latest Syntax !!!!!!!!!!!!");
// latest syntax from ES6 onwoards
arr.forEach((arg1,arg2,arg3) =>{
  console.log(arg1,arg2,arg3);
});






