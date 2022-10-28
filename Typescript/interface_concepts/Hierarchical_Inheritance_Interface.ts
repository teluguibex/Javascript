interface HI_Interface_1{
    varOne : string;
}

interface HI_Interface_2 extends HI_Interface_1 {
  varTwo : string;
}
interface HI_Interface_3 extends HI_Interface_1{
 
}
interface HI_Interface_4 extends HI_Interface_1 {

}
class HI_Class_Impl_4 implements HI_Interface_4{
    varOne: string = "Interface ....4";
}
class HI_Class_Impl_2 implements HI_Interface_2{
    varOne: string = "Interface ....1";
    varTwo : string = "Interface .... 2";
}
let int4 : HI_Class_Impl_2 = new HI_Class_Impl_2();
console.log(int4.varOne,int4.varTwo);


