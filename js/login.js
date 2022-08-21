function login () {
   let usuario = document.getElementById("email-login").value
   let contraseña = document.getElementById('contraseña-login').value

   if( usuario==="" || contraseña===""){
    Swal.fire(
        'Campos incompletos',
        'Debe ingresar email y contraseña',
        'error'
      )
    document.getElementById('email-login').classList.add('error-login');
    document.getElementById('contraseña-login').classList.add('error-login');


   }else{
    sessionStorage.setItem("user", usuario);
    location.href='index.html';
   }
}


document.addEventListener('DOMContentLoaded', ()=>

document.getElementById('button-login').addEventListener('click', ()=>{
    login();
})
)