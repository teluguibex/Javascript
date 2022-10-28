function add(num,addition){
  return addition(num + 10, false);
}
function sub(num,substraction){
   return substraction(num - 5 , false);
}
function mult(num,multiplication){
    multiplication(num * 5,false);
}
function division(num,division){
   division(num / 5, false);
}
add(5, (addResult,error) =>{
    if(!error){
        console.log("addd => ", addResult);
        sub(addResult,(subResult, error) =>{
            if(!error){
                console.log("Substraction =>",subResult);
                mult(subResult, (multiResult,error) =>{
                    if(!error){
                        console.log("Multiplication Result => ",multiResult);
                    }
                    division(multiResult, (divResult,error)=>{
                         if(!error){
                            console.log("Divsion Result => ",divResult);
                         }   
                    })
                } )
            }
        })
    }
});