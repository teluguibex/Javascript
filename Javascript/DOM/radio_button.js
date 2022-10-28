function save() {
    let fullName = document.getElementById("fullNameId").value;
    document.getElementById("fullNameSpan").innerHTML = fullName;
}
function getSelSub(e) {
    document.getElementById("fullNameSpan").innerHTML = " " + e;
}
