//array donde se cargarán los datos recibidos:
let products = [];

//función que recibe un array con los datos, y los muestra en pantalla a través el uso del DOM
function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i< array.length; i++) { 
        let products = array[i]
        htmlContentToAppend += `

        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>` + products.name + " - " + products.currency + " " + products.cost +`</h4> 
                        <p> `+ products.description + `</p>
                        <small class="text-muted">` + products.soldCount + ` articulos</small>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
}


/* 
EJECUCIÓN:

-Al cargar la página se llama a getJSONData() pasándole por parámetro la dirección para obtener el listado.
-Se verifica el estado del objeto que devuelve, y, si es correcto, se cargan los datos en categoriesArray.
-Por último, se llama a showCategoriesList() pasándole por parámetro categoriesArray.

*/

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            products = resultObj.data.products;
            showCategoriesList(products);
        }
    });
});

document.getElementById('cerrarSesion').addEventListener('click', ()=>{
    sessionStorage.clear;
    location.href='login.html'
})