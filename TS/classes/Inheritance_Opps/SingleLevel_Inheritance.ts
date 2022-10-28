//Single Level Inheritance ..
class Parent_SLI {
    protected varOne : string = "My Name is Parent";
}
class Child_SLI extends Parent_SLI{
  varTwo : string = this.varOne;
}
let childSLI : Child_SLI = new Child_SLI();
console.log(childSLI.varTwo);