let nameUser = 'Admin'
let email = 'admin@teste.com'
let password = 123456



// ------------------ VALIDAR LOGIN -----------------
function userLogin(){

let inputEmail = document.getElementById('inputEmail').value;
let inputPassword = document.getElementById('inputPassword').value;
let infoLogin = document.querySelector('.info');
let divLogoLoading = document.querySelector('.div-logo-loading');
let contentFormLogin = document.querySelector('.content-form-login');

infoLogin.classList.remove("info-error-show");
infoLogin.classList.remove("info-sucess-show");


if(inputEmail == email || nameUser && inputPassword == password){
    
       
    contentFormLogin.classList.add("content-hidden");
    divLogoLoading.classList.remove("content-hidden");

    setTimeout(function() {
        infoLogin.innerText = 'Usuário Logado!'
        infoLogin.classList.add("info-sucess-show");
        document.querySelector('.div-logo-loading h3').innerText = `Bem vindo ${nameUser}`
      }, 1000);
    
     setTimeout(function() {
       window.location.href = "/apiario/index.html";
     }, 3000);    
    

} else if(inputEmail !== email || nameUser || inputPassword !== password){
    
    infoLogin.innerText = 'Usuário e/ou Senha inválidos'
    infoLogin.classList.add("info-error-show");
} 

}


// ------------------ ENTER INPUT -----------------


function enterInput(){

// Aciona o enter no input email
let inputUser = document.getElementById("inputEmail");

inputUser.focus();

inputUser.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.querySelector(".btn-login").click();
  }
});


// Aciona o enter no input password
let inputPassword = document.getElementById("inputPassword");

inputPassword.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.querySelector(".btn-login").click();
  }
});

}

enterInput()