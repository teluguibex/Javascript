/*Promise : Execute task sequencially is called as promise.
        Nothing but First task completed then we can do next task.
    ** It divided into two sections .
      -- Promise creation .
      -- Promise consumption.
Exm :
    // Promise creation
        Promise();
        //consumption
        -- then 
        -- asyn & await
*/

let task1 = new Promise((resolved,reject)=>{
    setTimeout(()=>{
        resolved("Task 1 ...Done"); // API
    },2000)
}); //creation ...
  // promise consumption
task1.then((success,failed) => {
    console.log("Task 1 success block  : ",success);
},(failed) => {
    console.log("Task 1 failed block .. : ",failed);
})

let task2 = new Promise((resolved,reject)=>{
    setTimeout(()=>{
        resolved("Task 2 ...Done");
    },1000)
}); //creation ...
  // promise consumption
task2.then((success,failed) => {
    console.log("Task 2 success block  : ",success);
},(failed) => {
    console.log("task 2 failed block .. : ",failed);
})
Promise.all([task1,task2]);
