var name = localStorage.getItem("userName")
document.getElementById("getName").innerHTML=`
Welcome ${name}  <i class="fa-solid fa-heart"></i>
`
document.getElementById("logOut").addEventListener('click',function(){
    window.location='./index.html'
})

