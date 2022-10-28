class Parent_SLI{
    private varOne : string;
    constructor(public varOneData : string){
            this.varOne = varOneData;
    }
    public getParentData() : string{
        return this.varOne;
    }
}
class Child_SLI extends Parent_SLI{
    private varTwo : string;
    constructor(public varTwoData : string){
        super("Parenttttttt");
        this.varTwo = this.varTwoData;
    }
    public getChildData() :string{
        return this.varTwo;
    }
}

let obj1 : Parent_SLI = new Parent_SLI("My Name is Parent ....");
console.log(obj1.getParentData());
let obj2 : Child_SLI = new Child_SLI("My Name is Child One ....");
console.log("Child ... ",obj2.getChildData()," ",obj2.getParentData());
