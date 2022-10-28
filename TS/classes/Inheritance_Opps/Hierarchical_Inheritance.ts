/* Hierarchical Inheritance :
      We can create the multiple derived classes from one parent class.
 */
class Parent_HI {
    varOne :  string = "I am super parent ..";
}
class Child_One_HI extends Parent_HI{

}
class Child_Two_HI extends Parent_HI {}

class Child_Third_HI extends Parent_HI{
  varThree = this.varOne;
}
let cObj : Child_Third_HI = new Child_Third_HI();
console.log(cObj.varOne," ",cObj.varThree);


