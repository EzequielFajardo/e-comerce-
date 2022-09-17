
let products = [];
const costoOrdenAscendente = "AZ";
const costoOrdenDescendente = "ZA";
const ordenVendidos = "Cant.";
let criterioParaOrdenar = undefined;
let minCost = undefined;
let maxCost = undefined;

function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
    
}

function showProductsList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i< array.length; i++) { 
        let products = array[i]

        if (((minCost == undefined) || (minCost != undefined && parseInt(products.productCount) >= minCost)) &&
        ((maxCost == undefined) || (maxCost != undefined && parseInt(products.productCount) <= maxCost))){

         htmlContentToAppend += `
     <div onclick="setProductID(${products.id})" class="list-group-item list-group-item-action cursor-active">

         
            <div class="row">
                 <div class="col-3">
                    <img src="${products.image}" alt="product image" class="img-thumbnail">
                 </div>
                 <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4 class="mb-1"> ${products.name} -  ${products.currency} ${products.cost}</h4> 
                        <p>  ${products.description}</p>
                        <small class="text-muted">${products.soldCount} vendidos</small>
                        </div>
                        
                    </div>

                 </div>
            </div>
    
     </div>
        `
        }
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }}



document.addEventListener("DOMContentLoaded", function(e){
    let catID = localStorage.getItem("catID")
    getJSONData(PRODUCTS_URL+catID+EXT_TYPE).then(function(resultObj){
        
        if (resultObj.status === "ok")
        {
            products = resultObj.data.products;
            showProductsList(products);
        }
    });
});

function filtrar() {
    let inicial = parseInt (document.getElementById('filtroInicial').value);
    let final = parseInt (document.getElementById('filtroFinal').value);
    let listaFiltrada = products.filter(product=> product.cost >=  inicial && product.cost <= final);
    
    listaFiltrada.sort((ant,sig)=>ant.cost-sig.cost);

    showProductsList(listaFiltrada)
    }

   


 function sortProducts(criteria, array){
        let result = [];
        if (criteria === costoOrdenAscendente)
        {
            result = array.sort(function(a, b) {
                if ( a.cost < b.cost ){ return -1; }
                if ( a.cost > b.cost ){ return 1; }
                return 0;
            });
        }else if (criteria === costoOrdenDescendente){
            result = array.sort(function(a, b) {
                if ( a.cost > b.cost ){ return -1; }
                if ( a.cost < b.cost ){ return 1; }
                return 0;
            });
        }else if (criteria === ordenVendidos){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.soldCount);
                let bCount = parseInt(b.soldCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
        }
    
        return result;
    }
    
    function sortAndShow(sortCriteria, productos){
    criterioParaOrdenar = sortCriteria;

    if(products != undefined){
        currentProductsArray = productos;
    }

    products = sortProducts(criterioParaOrdenar, products);

    showProductsList(products);
}




document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById("botonFiltrar").addEventListener("click", function(){

        filtrar()
        
          
        })

        document.getElementById("sortAsc").addEventListener("click", function(){
            sortAndShow(costoOrdenAscendente);
           
            
        });
    
        document.getElementById("sortDesc").addEventListener("click", function(){
            sortAndShow(costoOrdenDescendente);
        });
    
        document.getElementById("sortByCount").addEventListener("click", function(){
            sortAndShow(ordenVendidos);
        
        });

    
            document.getElementById("clearRangeFilter").addEventListener("click", function(){
                document.getElementById("filtroInicial").value = "";
                document.getElementById("filtroFinal").value = "";
        
                minCost = undefined;
                maxCost = undefined;
        
                showProductsList(products);
            })
    

})
