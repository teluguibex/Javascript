function funOne(param1){
    console.log("My name is funOne");
//    console.log(param1);
    param1();
}
funOne(() =>{
   console.log("My name is funTwo");
})

