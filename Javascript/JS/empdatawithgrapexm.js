/* 
   I want the graph of collage data :
   1> empoloyee data :
   2> after geting data we can display the data into the graph.
*/

function gettingEmpData(){
    console.log("In getting Emp Data () ...");
  return  new Promise((resolved, reject) =>{
            setTimeout(() => {
            console.log("Getting Emp Data ...01");
             resolved("Data");
        }, 5000);
    });
}
function showEmpGraph(r){
    console.log("In  showEmpGraph() ...");
    return new Promise((resolved, reject) => {
        console.log("Graph ...02");
    });
}
async function consumption(){
    await gettingEmpData();
    await showEmpGraph(0);
}
consumption();
