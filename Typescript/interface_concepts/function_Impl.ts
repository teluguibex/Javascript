interface fun1{
   fun1() : string; 
}
class fun1Impl implements fun1{
     fun1 = () => {
        return "My name is fun1Impl ..."
    }
}
let fJson1 : fun1 = {
    fun1 : () =>{
        return "My name is fun1 in Json ...";
    }
}
let f1 : fun1Impl = new fun1Impl();
console.log(f1.fun1());
console.log("JSON Call : ", fJson1.fun1());
