class ClassOne{
    private subOne : string;
    private subTwo : string;
    private subThree : string;

    constructor(subOne :string,subTwo: string,subThree : string){
        this.subOne = subOne;
        this.subTwo = subTwo;
        this.subThree = subThree;
    }
     public details = () : string =>{
        return this.subOne + " <==> "+ this.subTwo + " <==> "+ this.subThree;
    }
    
}
let d : ClassOne = new ClassOne("JavaScript","Angular Js","ReactJs");
console.log(d.details());