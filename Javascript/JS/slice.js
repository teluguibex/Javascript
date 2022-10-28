//slice : retrive the particular piece of values from array.
let arr = [10,20,30,40,50,60,70];
    let s = arr.slice(2,4);
    console.log(s);
//push : Add the new element at the end of array.
arr.push(80);
console.log("push : ",arr);
//unshift : Add the element at the first position of the existing array.
arr.unshift(5);
console.log("unshift : ",arr);
//pop : It remove the last element from the array.
arr.pop();
console.log("pop : ",arr);

//shift : It remove the first element from the array.
arr.shift();
console.log("shift : ",arr);


