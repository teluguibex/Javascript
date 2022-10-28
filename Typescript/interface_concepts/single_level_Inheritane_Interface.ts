//Single Level Inheritane Implemented by Interface.
interface SLI_Interface1 {
    varOne : string;
}
interface SLI_Interface2 extends SLI_Interface1 {
    varTwo : string
}

let sli1 : SLI_Interface2 = {
    varOne : "Hello_1",
    varTwo : "Hello_2"
}
console.log(sli1.varOne,sli1.varTwo);


