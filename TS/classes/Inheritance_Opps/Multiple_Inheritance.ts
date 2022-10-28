//Multiple Inheritance not possible in typescript.
class Parent_One {
    varOne : string;
}
class Parent_Two {
    varTwo : string;
}
class Child_MPI extends Parent_One, Parent_Two{}