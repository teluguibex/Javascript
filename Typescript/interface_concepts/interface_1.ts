/* Interface :
    whenever we know only declaration, we dont know implementation
    then we choice interfaces.
    -- We will define interfaces by using 'interface' keyword.
    -- Implementation provided by using classes or json.
 */
interface interface1 {
    sub_one: string;
    sub_two: string;
    sub_three: string;
}
class class1 implements interface1 {
    sub_one: string = "ReactJs";
    sub_two: string = "AngularJs";
    sub_three: string = "NodeJs";
}
class class2 implements interface1 {
    sub_one: string = "Spring Boot";
    sub_two: string = "Spring Boot & Microservices";
    sub_three: string = "MongoDB";
}
let c1: class2 = new class2();
console.log(c1.sub_one,c1.sub_two,c1.sub_three);
