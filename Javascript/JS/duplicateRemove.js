let data = ["50","20","10","10","20"];
const points = [40, "100", 1, 5, "25", 10];

//    let data = ["ACC","ABC","AAA","ABC","AAA","STT","STT"]
  //         0  1  2  3  4
  //         0  1  2  0  1

//indexOf() :

// let removeDup = data.filter((element,index) =>{
//             return data.indexOf(element) == index ;
// }).sort((arg1,arg2)=>{
//         // console.log(arg1, arg2  );
//         return arg2 - arg1;
// });
// console.log(removeDup);
// console.log(points.sort());   

/*How sort work internally ?
  Ans : Internally sort method calls the compare() with arguments/parameter.
          exm : compare(10,20) 
            if result is negative then return the first arguments.
            if result is positve then return the senconds arguments.
            If restult is o then it dos'nt return any values.
*/

let d = points.sort((arg1,arg2)=>{
            return arg1 - arg2; 
    });
console.log(d);




