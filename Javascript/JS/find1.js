let arr1 = [10,20,30,20,40];
let d = arr1.filter((element,index,data) =>{
     return element > 20;
});
console.log(d);