function log(){
    var inval = document.getElementById("logname").value;
     localStorage.setItem("name", inval);
     window.location="index2.html";
}