/* find :If element is found/available then it retrun the existing element,
         otherwise it simply retrun the undefined.
*/            
let arr = [10,20,30,40,50,60,70];
let r = arr.find((element,index) =>{
  return element == 500;
});
console.log(r);


