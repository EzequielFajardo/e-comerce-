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

    let usuario = sessionStorage.getItem(user);
    if(usuario=="null"){
        alert('Por favor inicie sesión para continuar');
        this.location.href= "login.html"
    }else{
        document.getElementById(usuario).innerHTML = usuario;
    }

})