// bubbling ...
// protocol..
// ajax : 

function getStduentDataAPI() {
    console.log("In Student Data API fun ...");
    let task1 =  new Promise((success, error) => {
        setTimeout(() => {
            success("Succssfully retrived the stud data ... Done ..");
            //API Calling .....
        }, 5000);
    });
    return task1;
}

function filterOnStudData(studDataParam) {
    console.log("In filter fun : Student data is  .. ", studDataParam);
    return new Promise((success, error) => {
        setTimeout(() => {
            success("Successfully filtr on stud data ... Done");
        }, 2000);
    });

}
async function task() {
    let retrivedStudData = await getStduentDataAPI();
    let filterData = await filterOnStudData(retrivedStudData);
    console.log(filterData);
}
task();  