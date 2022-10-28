let arr  = ["Ram",20,30,40,"ABC"];

let fData = arr.filter((element,index,data) =>{
    return index;
});
console.log("f Data ",fData);
// console.log(arr);
// console.log(arr.length);

// delete arr[0]; //Bug 
// console.log(arr);
// console.log(arr.length);

//delete 
// arr.splice(0,1); 
// console.log(arr);
// console.log(arr.length);

//add
// arr.splice(0,1,"Test");
// console.log(arr);
// console.log(arr.length);

//let duplicate = [10,20,30,10,40,50,20];

let filterData = arr.filter((anyname,mukesh,data) =>{
    return anyname == 30;
}); 



console.log("filter Data ",filterData );

let add = arr.reduce((firstElement,nextElement) =>{
 return firstElement + nextElement;
});
// console.log("add is ",add);

// let values = [100,10,20,30,40,50,50,60,70,80,90,100,50];

let values = ["ABC","ABC","MNO","PQR","ABC"];

let data = values.filter((element,index,data) =>{
    // console.log(values.indexOf(element));
    return values.indexOf(element) == index;
});
// console.log("filter data => ",data);

//addd
// values.splice(4,0,-50,-60,-70); 
// console.log(values);

//delete 
// values.splice(1,3); 
// console.log(values);

