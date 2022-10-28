let s1 : string = 'Hello ..';
let s2 : string = `${s1}`;
console.log(s1 ,'<==>',s2);

let s3 : string | number = "Ram";
console.log(s3);

//Defined the array In two ways :
let arr1 : number[] = [10,20,30];
let arr2 : Array<number> = [10,20,30];
console.log(arr1, "<==>",arr2);
let bol1: Array<Boolean> = [true,false];
console.log("Boolean ",bol1);
