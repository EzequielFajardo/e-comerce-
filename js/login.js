function login () {
   let usuario = document.getElementById("email-login").value
   let contraseña = document.getElementById('contraseña-login').value

   if( usuario==="" || contraseña==="" ){
    alert ('Debe ingresar email y contraseña');

   } else{
    location.href='index.html';
   }

}

document.addEventListener('DOMContentLoaded', ()=>

document.getElementById('button-login').addEventListener('click', ()=>{
    login();
})
)