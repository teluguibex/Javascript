let d: string[] = ["Hello1", "Hello2", "Hello3"];
console.log("**************for loop******************");
for (let i = 0; i < d.length; i++) {
    console.log(d[i]);
}
console.log("****************forEach ******************");
// => {} Introduced in Es6
d.forEach((element, index) => {
    console.log(element, "===", index);
});
console.log("**************for of ******************");
//for Of loop
for (var v of d) {
    console.log(v);
}

console.log("**************for in ******************");
// for in loop used to iterate the json data
let obj: any = {
                key1: "Data 1",
                key2: "Data 2"
            };

for (const key in obj) {
    console.log(key ,"====",obj[key]);
}