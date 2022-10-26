function validateform(){
    //document.getElementsByTagName("button").setAttribute("style","color:blue");
    var name=document.getElementById("name");
    if (name.value==""){
        alert("Please enter some text in Name");
    }
    if (!isNaN(name.value)){
        alert("Please enter only text in Name")
    }

    var phno=document.getElementById("phno");
    if (phno.value==""){
        alert("Please enter your mobile number");
    }
    if (isNaN(phno.value)){
        alert("Enter a legitimate value in Mobile Number");
    }
    
    var age=document.getElementById("age");
    if (age<1){
        alert("Enter a legitimate age value");
    }
}
