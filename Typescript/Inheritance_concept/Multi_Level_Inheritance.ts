class Parent_MLI{
    private varOne : string = "Hello_1";
    constructor(var_one : string){
        this.varOne = var_one;
    }
    public getParentData() : string{
        return this.varOne;
    }
}

class Child_MLI extends Parent_MLI {
    private varTwo : string = "Hello_2";
    constructor(var_two: string){
        super("My Name Is Parent Class Constructor.."); // If extends the parent then fist should be super class constructor call.
     this.varTwo = var_two;    
    }
    public getChildData()  : string{
        return this.varTwo;
    }
}
class Super_Child_MLI extends Child_MLI{
    private varThree : string = "Hello_3";
    constructor(var_three : string){
        super("My Name Is Child Class Constructor ....");
        this.varThree = var_three;
    }
    public getSuperChild() : string{
        return this.varThree;
    }
}
let obj11  : Super_Child_MLI = new Super_Child_MLI("My Name Is Super Child Constructor ...");
console.log(obj11.getParentData(),obj11.getChildData(),obj11.getSuperChild());