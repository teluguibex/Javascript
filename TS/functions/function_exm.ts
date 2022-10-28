//1> Named Functions..
function funOne(param: number ,param2: number) : void{
    console.log(param + param2);
}
funOne(10,20);
//2> Anonymous/Arrow/Lambda Functions
let funOne1 = (param1 : string, param2 : string) : void =>{
  console.log(param1 , param2);
}
funOne1("Hello ..1","Hello ..2");
//Default Parameter : Introducted in ES6 version.

let funTwo = (arg1 : string ,arg2 : 
              string, arg3 : string = "Welcome ...", ...arg4 : any ) : void =>{
  console.log(arg1,arg2,arg3);
  console.log("arg4 ",arg4);
} 
funTwo("A","B","C",10,"string",true,34423.34234);
