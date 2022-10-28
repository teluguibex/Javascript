class Class_One_3 {
    public  msg() : any{
        return "Welcome To Typescirpt";
    }
}
class Class_Two_2_3 {
    constructor(public obj : any){}
}
let obj1_3 : Class_Two_2_3 = new Class_Two(new Class_One_3());
console.log(obj1_3.obj.msg());