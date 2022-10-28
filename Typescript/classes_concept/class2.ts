class Class_Demo2{
    //If delcare the argument as public then object will access it.
    constructor(public arg1:string,public arg2:string,public arg3:string){
    }
}

let obj21 : Class_Demo2 = new Class_Demo2("AngularJs","NodeJs","MongoDB");
console.log(obj21.arg1,obj21.arg2,obj21.arg3);

let obj22 : Class_Demo2 = new Class_Demo2("ReactJs","NodeJs","MongoDB");
console.log(obj22.arg1,obj22.arg2,obj22.arg3);
