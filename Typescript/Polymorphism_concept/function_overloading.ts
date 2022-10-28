class ClassOne{
      /* Note :
         -Must be declare the functions then implementation method..
         -Declartion should be on top of implementation of function.
         -Don't compare the typescript function overloading
          with other langulages like java,.net etc.  
         */      
    add(varOne : string,varTwo : string) :any;
    add(varOne : number,varTwo : number) :any;
    add(varOne :any,varTwo:any){
        console.log(varOne + varTwo);
    }
}

let objClassOne : ClassOne = new ClassOne();
objClassOne.add("Hello_1 "," Hello_2");
objClassOne.add(10,20);
// objClassOne.add(true,false); //Restication because cant add the function in declaration block
