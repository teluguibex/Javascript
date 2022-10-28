interface MI_Interface1{
    varOne : string;
}
interface MI_Interface2{
    varTwo : string;
}
interface MI_Interface3 extends MI_Interface1,MI_Interface2{
    varOne : string;
    varTwo : string;
    varThree : string;
}

class MI_ClassImpl implements MI_Interface3{
    varOne: string = "RactJs"; 
    varTwo :string = "AngularJs";
    varThree :string = "NodeJs";
}
let miJson : MI_Interface3 = {
    varOne : "Hello_1",
    varTwo : "Hello_2",
    varThree : "Hello_3"
}
let miObj : MI_ClassImpl=  new MI_ClassImpl();
console.log(miObj.varOne,miObj.varTwo,miObj.varThree);
console.log(miJson.varOne,miJson.varTwo,miJson.varThree);