 function data(){
var a= document.getElementById("1").value;
var b= document.getElementById("2").value;
var c= document.getElementById("3").value;
if(a==""||b==""||c=="")
{
    alert("all fields are mendatory");
    return false;
}
else{
    true;
}

}
