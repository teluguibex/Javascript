console.log("*******************************************");
let fun_one = (param1: string, param2: any): void => {
    console.log(param1, param2);
}

fun_one("Welcome !!!!", "Hello !!!!");
console.log("*******************************************");

let funTwo = (param1: any, param2: any, param3: any): any => {
    console.log(param1, param2, param3);
}
funTwo(undefined, undefined, undefined);
funTwo(null, null, null);
console.log("*******************************************");
let funThrree = (param1: string, ...param2: any): void => {
    console.log(param1, param2);
}
funThrree("Welcome !!!!", "Welcome !!!", 20, 35435.55, true);
console.log("**************Callback function*****************************");

function demo(param1: any, param2: any): void {
    console.log(param1(), param2());
}
demo((): string => { return "Hello !!!" }, (): string => { return "Welcome !!!" })
console.log("*****************Pass Parameter As Arguments**************************");
let _success = (): string => {
    return "Success !!!"
}
let _error = (): string => { return "Error !!!" }
let _network = (param1: any, param2: any): void => {
    console.log(param1(), param2());
}
_network(_success, _error);
console.log("*******************************************");
