let popup = document.getElementById("popup");
function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup")
}

function f1() {
    var username, res = true , Email , Dob , Section,

    username = document.getElementById("username").value
    if(username.length == 0){
        res = false
        document.getElementById("book").innerHTML=" Please  Enter the Name"
    }
    Email = document.getElementById("email").value
    if (Email.length == 0) {
         res = false
         document.getElementById("book1").innerHTML = "Please Enter the Email id"
    }

    Dob = document.getElementById("DOB").value
    if (Dob.length == 0) {
        res = false
        document.getElementById("book2").innerHTML = "Please Enter your Dob"
    }

    section = document.getElementById("room").value
    if(section.length==0){
        res = false
        document.getElementById("book3").innerHTML = "Please Select Room"
    }

    return res
}

function onlychar() {
    username = document.getElementById("username").value
    reg = /^[a-z A-Z]+$/
    if(!reg.test(username))
    {
        document.getElementById("book").innerHTML = "Enter only Char"
    }
    else{
        document.getElementById("book").innerHTML = ""
    }
}

function onlyemail() {
    Email = document.getElementById("email").value
    reg =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!reg.test(Email))
    {
        document.getElementById("book1").innerHTML = "please Enter @"
    }
    else{   
        document.getElementById("book1").innerHTML = ""
    }
}
