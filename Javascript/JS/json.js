let obj = {
    "sub_one": "ReactJs",
    "sub_two": "NodeJs",
    "sub_three": true,
    "nubmer": 2343242342,
    "arrObj": ["ABC", "PQR"],
    "obj1": { "key1": "key1_value" }
}

let subOneData = obj.sub_one; //normal way ..
var {sub_one} =  obj; // Deconstruction way ...


// for (k in obj) {
//     console.log(k);
//     console.log(obj[k]);
//     console.log(typeof k);
//     console.log("------------------------");
// }



let {sub_one,sub_two,obj1} = obj; // deconstruction process .....
console.log("Using De Const ",sub_one, sub_two,obj1);

console.log("Normal Way ",obj.sub_one); 

//  console.log(Object.keys(obj));
// console.log(Object.values(obj));

// typeof : what type of data assign as value to the variable.
// console.log(typeof obj.sub_three);
// console.log(obj.sub_one ,obj.sub_two,obj.sub_three);
//console.log(obj);

// for (k in obj) {
//     console.log(k);
//     console.log(obj[k]);
//     console.log(typeof k);
//     console.log("------------------------");
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log("obj ",obj);
// console.log(typeof obj);
// let str = JSON.stringify(obj);
// console.log("str ",str);
// console.log("str " , typeof str);
// let parse = JSON.parse(str);
// console.log("parse ",parse);
// console.log(typeof parse);

/*
let obj1 = {
     "key1" : "Hello_1"
}
let obj2 = {
    "key2" : "Hello_2"
}
let obj3 = {
    ...obj1,
    ...obj2
}
console.log(obj3);
*/

// let obj1 = {
//             "key1" : {"sub_one" : "RactJs"},
//             "key2" : {"sub_two" : "NodeJs"},
//             "key3" : {"sub_three" : "MongoDB"},
//             }

// let {key1, key2,key3} = obj1;
// console.log(key1, key2, key3);

// let {sub_one} = key1;
// console.log(sub_one);

let json1 = {
    "key1": "Hello_1"
}
let json2 = {
    "key2": "Hello_2"
}
let json3 = {
    ...json1,
    ...json2
}
// console.log("Json Data In Json3 =>", json3);
