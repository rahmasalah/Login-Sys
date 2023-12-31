var inputEmail = document.getElementById("inputEmail")
var inputPassword = document.getElementById("inputPassword")
var login = document.getElementById("login")
var notExist = document.getElementById("emailExist")
var required = document.getElementById("required")
var inCorrect = document.getElementById("inCorrect")
var signUp = document.getElementById("signUp")
if(localStorage.getItem("info"!=null)){
    var memory = JSON.parse(localStorage.getItem("info"))
    login.addEventListener('click',function(){
        check()
    })
}
else{
    login.addEventListener('click',function(){
        notExist.classList.remove("d-none")
    })
}



signUp.addEventListener('click',function(){
    window.location = './signup.html'
})

function validationEmail(){
    var text= inputEmail.value;
    var regexEmail = /^\w{10,30}\@(gmail|yahoo)\.com$/

    if (regexEmail.test(text)){
        inputEmail.classList.add("is-valid")
        inputEmail.classList.remove("is-invalid")
        return true;
    }
    else{
        inputEmail.classList.add("is-invalid")
        inputEmail.classList.remove("is-valid")
        return false;
    }

}

function validationPassword(){
    var text= inputPassword.value;
    var regexPassword = /^\w{8,}$/

    if (regexPassword.test(text)){
        inputPassword.classList.add("is-valid")
        inputPassword.classList.remove("is-invalid")
        return true;
    }
    else{
        inputPassword.classList.add("is-invalid")
        inputPassword.classList.remove("is-valid")
        return false;
    }

}

inputEmail.addEventListener("input",validationEmail)
inputPassword.addEventListener("input",validationPassword)




    function check(){
        if(inputEmail.value == "" || inputPassword.value == ""){
                required.classList.remove("d-none")
                notExist.classList.add("d-none")
                return
        }
        else{
            for(var i=0; i<memory.length; i++){
                if(memory[i].email==inputEmail.value){
                    if(memory[i].pass!=inputPassword.value){
                        inCorrect.classList.remove("d-none")
                        notExist.classList.add("d-none")
                        required.classList.add("d-none")
                        return
                    }
                    localStorage.setItem("userName",memory[i].name)
                    notExist.classList.add("d-none")
                    required.classList.add("d-none")
                    inCorrect.classList.add("d-none")
                    window.location= './home.html'
                    return;
                }
            }
            notExist.classList.remove("d-none")
            required.classList.add("d-none")
            inCorrect.classList.add("d-none")
        }
    
    }
    



    




















