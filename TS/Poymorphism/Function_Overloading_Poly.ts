/* Defination:
       It Behave like many is called as polymorphism.
       It has two types :
        -- Function Overloading..
        -- Function Overriding ..
*/
class FunctionOverloading {
        add(arg1: string, arg2: string);
        add(arg1: number, arg2: number);
        add(arg1: any, arg2: any) {
                console.log(arg1 + arg2);
        }
}
let flObj: FunctionOverloading = new FunctionOverloading();
flObj.add("Ram", "Sham");
flObj.add(10, 20);
