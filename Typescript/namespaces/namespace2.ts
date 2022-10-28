/// <reference path="namespace1.ts" />
namespace namespace2 {
   export function getMsg() : string{
        return namespace1.varOne;
    }
}
console.log(namespace2.getMsg());
