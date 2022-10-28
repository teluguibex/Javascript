interface InterfaceJson1 {
    funOne(): string;
}

let jObj : InterfaceJson1 = {
    funOne : () :string =>{
      return "My name is function one ...";   
    } 
}

console.log(jObj.funOne());
