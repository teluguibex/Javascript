/* *** class : Collection of variables and functions is called as class.
               We can create the object of class using the new keyword.
               class & new both are predefined keyword.
*** Modifiers :
            public    : used for functions.
            private   :  used for variables.
            protected : used for both.
    Note : 
    constructor :        
        "We will create the constructor using 'constructor' keyword."
*/

class Student {
    protected sId : number;
    protected sName : string;
    protected  sAdd : string;
    protected sMarks: number;

    /* Note :
             If we declare the costructor argument as public ,
             then only object refrence variable will access it.
             otherwise we will get the error.
    */
    constructor(public sIdArg : number, private sNameArg : string, 
                private sAddArg : string, private sMarksArg: number){
        this.sId = sIdArg;
        this.sName = sNameArg;
        this.sAdd = sAddArg;
        this.sMarks = sMarksArg;
    }
    getStudDetails = () : void => {
        console.log(this.sId +" <==> "+this.sName+" <==> "+this.sAdd +" <==> "+this.sMarks);
    }
}
  //crate the object ..
  let studObj1 : Student = new Student(100,"Ram","Hyd",78);
  studObj1.getStudDetails();
  studObj1.sIdArg = 1001;

