document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});
document.addEventListener('DOMContentLoaded', function(){

    let usuario = sessionStorage.getItem('user');
    if(usuario==null){
      alert('Inicie sesión para continuar')
       
        location.href= "login.html"
    } else{
        document.getElementById('usuario').innerHTML = usuario;
    }

})
document.getElementById('cerrarSesion').addEventListener('click', ()=>{
  sessionStorage.clear;
  location.href='login.html'
})