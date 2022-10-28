class SuperParent {
    constructor(param1: string) {
        console.log("spOne : ", "In constructor ..", param1);
    }
    spOne(param: string): void {
        console.log("spOne : ", "In spOne ..", param);
    }
}
class SuperChild extends SuperParent {
    constructor() {
        super("My name is super parent constructor...");
    }
    scOne(param:string,...params): void {
        this.spOne("my name is super parent ..");
        console.log("scOne : ",param,params);
    }

}
let scOneObj: SuperChild = new SuperChild();
scOneObj.scOne("Hello",12,"String",true,34324.45645654);