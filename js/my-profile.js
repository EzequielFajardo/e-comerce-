function validarDatos(){
    
}

document.addEventListener('DOMContentLoaded',  ()=>{
    let  mailIniciado = sessionStorage.getItem('user');
    document.getElementById('email1').value = mailIniciado
   
    document.getElementById('formDatos').addEventListener('submit', e=>{
       
        if(!validarDatos() || !form.checkValidity()){

            e.preventDefault();
            e.stopPropagation();
            document.body.classList.add('was-validated');
        } 

       


    })
})

