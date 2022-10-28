//Hydrid : Hierarchical + Multiple .

//Hierarchical Inheritance
interface Parent_One_HBI {
    varOne: string;
}
interface Child_One_HBI extends Parent_One_HBI {
    varChOne : string;
}
interface Child_Two_HBI extends Parent_One_HBI{
    varChTwo : string;
}
//Multiple Inheritance
interface BaseOne extends Child_One_HBI,Child_Two_HBI{
}
let baseObj : BaseOne = {
        varOne   : "RactJs",
        varChOne : "AngularJs",
        varChTwo : "VeuJs"
}
console.log("Hybrid Inheritance Data ... ",baseObj);
