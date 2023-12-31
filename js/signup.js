var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
var userPassword = document.getElementById("userPassword")
var submitInput = document.getElementById("submitInput")
var isExist = document.getElementById("isExist")
var signIn = document.getElementById("signIn")
var required = document.getElementById("required")
var success = document.getElementById("success")



var userInfo=[]

if(localStorage.getItem("info" !=null)){
    var userInfo= JSON.parse(localStorage.getItem("info"))
}

function addInfo(){
    if(userName.value=="" || userEmail.value=="" || userPassword.value=="" ){
        required.classList.remove("d-none")
        success.classList.add("d-none")
        isExist.classList.add("d-none")
        return
    }
    else if(validationName() && validationEmail() && validationPassword()){
        var info ={
            name:userName.value,
            email:userEmail.value,
            pass:userPassword.value
        }
        for(var i=0; i<userInfo.length; i++){
            if(userInfo[i].email==info.email){
                isExist.classList.remove("d-none")
                required.classList.add("d-none")
                success.classList.add("d-none")
                return;
            }
        }
        userInfo.push(info)
        isExist.classList.add("d-none")
        required.classList.add("d-none")
        success.classList.remove("d-none")
        localStorage.setItem("info",JSON.stringify(userInfo))
    }
}


submitInput.addEventListener('click', addInfo)

function validationName(){
    var text= userName.value;
    var regexName = /^\w{3,10}$/

    if (regexName.test(text)){
        userName.classList.add("is-valid")
        userName.classList.remove("is-invalid")
        document.getElementById("alertName").classList.add("d-none")
        return true;
    }
    else{
        userName.classList.add("is-invalid")
        userName.classList.remove("is-valid")
        document.getElementById("alertName").classList.remove("d-none")
        return false;
    }

}

function validationEmail(){
    var text= userEmail.value;
    var regexEmail = /^\w{10,30}\@(gmail|yahoo)\.com$/

    if (regexEmail.test(text)){
        userEmail.classList.add("is-valid")
        userEmail.classList.remove("is-invalid")
        document.getElementById("alertEmail").classList.add("d-none")
        return true;
    }
    else{
        userEmail.classList.add("is-invalid")
        userEmail.classList.remove("is-valid")
        document.getElementById("alertEmail").classList.remove("d-none")
        return false;
    }

}

function validationPassword(){
    var text= userPassword.value;
    var regexPassword = /^\w{8,}$/

    if (regexPassword.test(text)){
        userPassword.classList.add("is-valid")
        userPassword.classList.remove("is-invalid")
        document.getElementById("alertPass").classList.add("d-none")
        return true;
    }
    else{
        userPassword.classList.add("is-invalid")
        userPassword.classList.remove("is-valid")
        document.getElementById("alertPass").classList.remove("d-none")
        return false;
    }

}


userName.addEventListener('input',validationName)
userEmail.addEventListener('input',validationEmail)
userPassword.addEventListener('input',validationPassword)

signIn.addEventListener('click',function(){
    window.location = './index.html'
})








