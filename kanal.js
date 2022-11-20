function convert(){
    var i= document.getElementById("i").value;
    var sq= i*605;
    var ac= i/8;
    document.getElementById("sq").innerHTML = sq;
    document.getElementById("ac").innerHTML = ac;
}
function back(){
    window.location = "index.html";
}