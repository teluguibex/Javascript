abstract class Abstract_Class_1 {
    abstract funOne() : any;
}

let aObj1 : Abstract_Class_1 = {
     funOne : () : any =>{
        return "My name is function four .."
    }
}
console.log(aObj1.funOne());