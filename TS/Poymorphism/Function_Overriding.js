/* Function Overriding :
     Ovride the functionality of parent function in to the child .
 */
var Parent_Overriding = /** @class */ (function () {
    function Parent_Overriding() {
        this.db = function () {
            console.log("Parent ...db");
        };
    }
    return Parent_Overriding;
}());
var Child_Overriding = /** @class */ (function () {
    function Child_Overriding() {
        this.db = function () {
            console.log("Child ...db");
        };
    }
    return Child_Overriding;
}());
var childOver = new Child_Overriding();
childOver.db();
