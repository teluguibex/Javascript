class Parent_HieI{
    varOne_p : string = "My Name Is Hierarchical Inheritance .."
}
class Child_HieI_1 extends Parent_HieI {
     varChild1 : string = "My Name Is Child_One";
}
class Child_HieI_2 extends Parent_HieI {
     varChild1 : string = "My Name Is Child_Two";
}
class Child_HieI_3 extends Parent_HieI {
     varChild1 : string = "My Name Is Child_Three";
}

let objc_1 : Child_HieI_1 = new Child_HieI_1();
console.log(objc_1.varChild1,objc_1.varOne_p);
