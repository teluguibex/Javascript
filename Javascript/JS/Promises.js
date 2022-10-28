/*let promise1 = new Promise((m1,m2)=>{
    m1("I will definetly make a master to my satya sir...");
})
.then((sucess)=>{
   console.log(sucess);
},
(error) =>{
    console.log(error);
}) */

let promise1 = new Promise((resolved, reject) => {
    setTimeout(() => {
        resolved("Hello_01");
    }, 10000);
})

let promise2 = new Promise((resolved, reject) => {
    setTimeout(() => {
        resolved("Hello_02");
    }, 20000);
})

let promise3 = new Promise((resolved, reject) => {
    setTimeout(() => {
        resolved("Hello_03");
    }, 30000);
})

// promise1.then((result, error) => {
//     console.log(result);
// }, (error) => {
//     console.log("error ", error);
// });

// promise2.then((result, error) => {
//     console.log(result);
// }, (error) => {
//     console.log("error ", error);
// });

// promise3.then((result, error) => {
//     console.log(result);
// }, (error) => {
//     console.log("error ", error);
// });

Promise.all([promise1,promise2,promise3]).then((result,reject)=>{
    console.log(result);
});
Promise.race([promise1,promise2,promise3]).then((result,error) =>{
    console.log(result);
},(error)=>{
        console.log(error);
})