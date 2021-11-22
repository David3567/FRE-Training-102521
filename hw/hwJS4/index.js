// var y = document.getElementById("s2");
// function get1() {
//     var x = document.getElementById("s1");
//     if (x.value == "Marketing"){
//         y.value = "Marketing";
//     }  
// }
function get1() {
    var x = document.getElementById("s1");
    var y = document.getElementById("s2");
    y.value =x.value;
}
function get2() {
    var y = document.getElementById("s2");
    var x = document.getElementById("s1");
    x.value =y.value;
}
