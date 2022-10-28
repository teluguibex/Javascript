interface MLI_Interface1 {
    varOne: string;
}
interface MLI_Interface2 extends MLI_Interface1 {
    varTwo: string
}

interface MLI_Interface3 extends MLI_Interface2 {
    varThree: string
}

class MLI_ClassImpl implements MLI_Interface3 {
    varOne: string = "ReactJs";
    varTwo: string = "AngularJs";
    varThree: string = "NodeJs";
}
//Using JSON
let jObj: MLI_Interface3 = {
    varOne: "Spring Boot",
    varTwo: "Spring MVC",
    varThree: "Spring Boot & Microservices"
}
let mliObj: MLI_ClassImpl = new MLI_ClassImpl();
console.log(mliObj.varOne, mliObj.varTwo, mliObj.varThree);
console.log(jObj.varOne,jObj.varTwo,jObj.varThree);

