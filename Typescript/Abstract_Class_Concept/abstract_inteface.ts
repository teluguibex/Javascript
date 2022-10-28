interface AInterface{
    welcome() : string;
}

abstract class Abstract1 implements AInterface{
    welcome = () : string =>{
        return "Welcome ...To ... Interface....";
    }
    hello = () =>{
        console.log("My name is Hello ");
    }
    abstract hello1():string;
}

class Abstract2  extends Abstract1 {
   hello1 = () : string =>{
    return "My name is Hello...1"
   } 
}
let aObj2 : Abstract2 = new Abstract2();
console.log(aObj2.hello(),aObj2.hello1());