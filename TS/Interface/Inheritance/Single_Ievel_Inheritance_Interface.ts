//Single Level Inheritance ..
//Remember :
    
interface Interface_Parent_SLI{
    varOne: string;
    varTwo :string;
}
interface Interface_Child_SLI extends Interface_Parent_SLI  {
     varThree :string; 
}

let iObj : Interface_Child_SLI = {
    varOne : "AngularJS",
    varTwo : "Typescript",
    varThree : "MongoDb"
}
console.log(iObj);