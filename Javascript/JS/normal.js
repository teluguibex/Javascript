/* 
   I want the graph of collage data :

   1> empoloyee data :
      
   2> after geting data we can display the data into the graph.
*/

function gettingEmpData() {
    setTimeout(() => {
        console.log("Getting Emp Data ...01");
        }, 15000);
}
function showEmpGraph(r) {
    console.log("Graph ...02");
}

gettingEmpData();
showEmpGraph(0);