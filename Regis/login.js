function f1() {
    var username
    var res = true  
    var Email 
    var mobile 
    var  password
    var confirm

    username = document.getElementById("username").value
    if(username.length == 0){
        res = false
        document.getElementById("s1").innerHTML=" Please  Enter the Name"
    }

    Email = document.getElementById("Email").value
    if (Email.length == 0) {
         res = false
         document.getElementById("s2").innerHTML = "Please Enter the Email id"
    }
    
    mobile = document.getElementById("mobile").value
     if(mobile.length == 0) {
        res = false
        document.getElementById("s3").innerHTML = " Please Enter  your Mob no."
    }

    password = document.getElementById("Password").value 
    if (password.length == 0) {
        res = false
        document.getElementById("s4").innerHTML = " Please Enter your password"
    }
    confirm = document.getElementById("Confirm").value
    if(confirm.length==0){
        res = false
        document.getElementById("s5").innerHTML = " Please Enter confirm password"
    }

    return res
}

function onlychar() {
    username = document.getElementById("username").value
    reg = /^[a-z A-Z]+$/
    if(!reg.test(username))
    {
        document.getElementById("s1").innerHTML = "Enter only Char"
    }
    else{
        document.getElementById("s1").innerHTML = ""
    }
}

function onlyEmail() {
    Email = document.getElementById("Email").value
    reg =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!reg.test(Email))
    {
        document.getElementById("s2").innerHTML = "please Enter @"
    }
    else{
        document.getElementById("s2").innerHTML = ""
    }
}

function onlynum(){
    Num = document.getElementById("mobile").value
    reg = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!reg.test(Num))
    {
        document.getElementById("s3").innerHTML = "NO valide this number"
    }
    else{
        document.getElementById("s3").innerHTML = ""
    }
}

function onlypass() {
    password = document.getElementById("Password").value
    reg = /[A-Za-z\d@$! %*?&]{8,}$/
    if(!reg.test(password))
    {
        document.getElementById("s4").innerHTML = "No Correct"
    }
    else{
        document.getElementById("s4").innerHTML = ""
    }
}
function onlyconfirm() {
    confirm = document.getElementById("Confirm").value
    reg = /[A-Za-z\d@$! %*?&]{8,}$/
    if(!reg.test(confirm))
    {
        document.getElementById("s5").innerHTML = "Please correct password"
    }
    else{
        document.getElementById("s5").innerHTML = ""
    }
}

var popup = document.getElementById('popup');
function CloseSlide(){
    popup.classList.remove("open-slide")
}
var popup = document.getElementById('popup');
function showPopup() {
    popup.style.transform = 'translate(-50%, -50%) scale(1)';
    popup.style.visibility = 'visible';
}
function closePopup() {
    popup.style.transform = 'translate(-50%, -50%) scale(0)';
    popup.style.visibility = 'hidden';
}
