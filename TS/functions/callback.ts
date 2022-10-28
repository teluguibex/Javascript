let callback = (...params:any) :void =>{
  console.log(params[0]());
  console.log(params[1]());
}  
callback(() : string => {return "Welcome ...";},
         () : string => {return "Hello ..."},
)