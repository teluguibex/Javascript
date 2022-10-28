//Interface Implemention By Using JSON.
interface Interface_Json {
     varOne : string;
     varTwo : string;
}
let iJson : Interface_Json = {
    varOne : "ReactJs",
    varTwo : "NodeJs" 
}
console.log(iJson.varOne +" <===> "+iJson.varTwo);