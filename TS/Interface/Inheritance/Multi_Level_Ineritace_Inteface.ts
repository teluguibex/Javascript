//Multi Level Inheritance ..
interface Interface_Parent_MLI{
    varOne: string;
    varTwo :string;
}
interface Interface_Child_MLI extends Interface_Parent_MLI  {
     varThree :string; 
}
interface Interface_Sub_Child_MLI extends Interface_Child_MLI {
     varFour : number;
}
let subOjb : Interface_Sub_Child_MLI = {
            varOne : "AngularJS",
            varTwo : "Typescript",
            varThree : "MongoDb",
            varFour : 100
}
console.log(subOjb);