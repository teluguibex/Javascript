/* Note :
    Override the parent class functionality with child class functionality
    is called as function overriding.
 */
class Parent_DB{
    public dbFun(): string {
        return "Data come from oracle datbase .....soon";
    }
}
class Child_DB extends Parent_DB{
    public dbFun(): string {
        return "Data come from MongoDB datbase .....soon";
    }
}

let cObj : Child_DB = new Child_DB();
console.log(cObj.dbFun());