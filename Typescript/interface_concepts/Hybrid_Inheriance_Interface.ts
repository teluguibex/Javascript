interface H_Interface_1{
    funOne() : string;
}

interface H_Interface_2 extends H_Interface_1{
 funTwo()  : string;
}

interface H_Interface_3 extends H_Interface_1{
    funThree() : string;
}

interface H_Interface_4 extends H_Interface_2,H_Interface_3 {
  funFour() : string;
}
let hJson : H_Interface_4 = {
    funOne : () : string =>{
       return "My name is function one ";
    },
    funTwo :():string =>{
            return "My name is function two";
    },
    funThree:() : string =>{
        return "My name is function three .."
    },
    funFour:() : string =>{
        return "My name is function four .."
    }

}
console.log(hJson.funOne(),hJson.funTwo(),hJson.funThree(),hJson.funFour());



