// Implemeniting By Using Class :
interface Interface_One {
   subOne : string;
   subTwo : string;
   subThree: string;
}
class Demo implements Interface_One{
 subOne = "ReactJs";
 subTwo = "NodeJs";
 subThree = "MongoDB";
}
let dObj : Demo = new Demo();
console.log(dObj.subOne +"<==>"+ dObj.subTwo +"<==>"+ dObj.subThree);