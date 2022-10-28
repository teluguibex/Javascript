class Student_4 {

    private sId : number;
    private sName : string;
    private sAdd : string;
    //If we delcare the argument as public thenn we can access using object.
    constructor(public studId :number,public studName : string,
                public studAdd : string){
                    this.sId = studId;
                    this.sName = studName;
                    this.sAdd = studAdd;
    }

    public readData() : any {
        return this.sId +" <==> "+this.sName+"<==>"+this.sAdd;
    }

}
let obj_4_1 : Student_4 = new Student_4(101,"Goraksh Deshmukh","Bengalore");
let obj_4_2 : Student_4 = new Student_4(102,"Sameer Deshmane","Hydrabad");

console.log(obj_4_1.readData());
console.log(obj_4_2.readData());