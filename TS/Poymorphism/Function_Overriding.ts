/* Function Overriding :
     Ovride the functionality of parent function in to the child .
 */
class Parent_Overriding {
    db = () : void => {
        console.log("Parent ...db");
    } 
}
class Child_Overriding {
    db = () =>{
        console.log("Child ...db");
    }
}
let childOver : Child_Overriding = new Child_Overriding();
childOver.db();