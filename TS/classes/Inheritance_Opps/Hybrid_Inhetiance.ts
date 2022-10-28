/* Hibrid Inheritance :
      Combination Of : 
            (Hierarchical Inheritance + Multiple Inheritance)
*/        
class Parent_One_HI{
    varOne : string;
}
class Child_One extends Parent_One_HI {}
class Child_Two extends Parent_One_HI{}
class Sub_Child extends Child_One,Child_Two{}