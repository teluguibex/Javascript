 function add(num) {
    console.log("In add");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(num + 5);
        }, 15000);
    });
}
function sub(num) {
    console.log("In sub");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(num - 5);
        }, 1000);
    });
}

function multi(num) {
    console.log("In multi");
    return new Promise((resolved, reject) => {
            resolved(num * 5);
    });
}

function div(num) {
    console.log("In div");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved(num / 5);
        }, 15000);
    });
}


async function consume() {
    let addResult = await add(10);
    console.log("addition : ", addResult);
    let subResult = await sub(20);
    console.log("substraction : ", subResult);
    let multiResult = await multi(10);
    console.log("multiplication : ", multiResult);
    let divResult = await div(10);
    console.log("division : ", divResult);
}
consume();