let productInfo = [];
let comentarios = [];
function setProductID(id) {
  localStorage.setItem("productID", id);
  document.location.reload()
  
}


function showProductInfo(productInfo) {
  let htmlContentToAppend = "";

  htmlContentToAppend += `

       <div class="container py-4 my-4 mx-auto d-flex flex-column">
    <div class="header">
        <div class="row r1">
            <div class="col-md-9 abc">
                <h1>${productInfo.name}</h1>
        </div>
    </div>
    <div class="container-body mt-4">
        <div class="row r3">
            <div class:"a123" class="col-md-5 p-0 klo">
                   
                   <h2> ${productInfo.cost} ${productInfo.currency}</h2>
                   <br>
                   <p class="text-right para"><strong>Descripción:</strong>
                   <br>${productInfo.description}</p>
                   <p><strong>Categoría:</strong>
                   <br> ${productInfo.category}</p>
                   <p><strong>Cantidad de vendidos:</strong><br>
                   ${productInfo.soldCount}</p>
                   
                    
            </div>
            <div class="col-md-7"> <div id="carouselExampleControls" class="carousel slide dark" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="${productInfo.images[0]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${productInfo.images[1]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${productInfo.images[2]}" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${productInfo.images[3]}" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> </div>
        </div>
    </div>
    <div class="footer d-flex flex-column mt-5">
        <div class="row r4">
            <div class="col-md-2 mio offset-md-4" ><a href="#">Añadir al carrito</a></div>
            <div class="col-md-2 myt "><button type="button" class="btn btn-outline-warning"><a href="#">Comprar ahora</a></button></div>
        </div>
    </div>
</div>

<br><h4><strong>Productos relacionados:</strong></h4>

<div class="imgRel">
   <h6>${productInfo.relatedProducts[0].name}</h6>
   <div onclick="setProductID(${productInfo.relatedProducts[0].id})" id="ProdRel1">
   <input type="image"src= ${productInfo.relatedProducts[0].image} alt="" class=" img-thumbnail" width="25%" >
    </div>
    
   <h6>${productInfo.relatedProducts[1].name}</h6>
   <div onclick="setProductID(${productInfo.relatedProducts[1].id})" id="ProdRel2">
   <input type="image" src=${productInfo.relatedProducts[1].image} alt="" class="  img-thumbnail" width="25%" >
   </div>  </div>
     `;

  document.getElementById("info-list-container").innerHTML =
    htmlContentToAppend;
}

function showComents(array) {
  let comentariosHtml = "";
  for (let i = 0; i < array.length; i++) {
    comentarios = array[i];

    comentariosHtml += ` 

  <div> </div> 
    <div class="comment-widgets">
        <!-- Comment Row -->
        <div class="d-flex flex-row comment-row m-t-0">
            <div class="comment-text w-100">

                <h6 class="font-medium"><strong>
                ${comentarios.user} 
              </strong></h6><div id="estrellitas"> ${calificacion(comentarios.score)}
       </div> <span class="m-b-15 d-block"> ${comentarios.description}</span>
                <div class="comment-footer"><span class="text-muted float-right">${comentarios.dateTime}</span></div>
            </div>
        </div>
    </div>
</div>
</div>
</div> </div> 
  `;
  }
  document.getElementById("listaComentarios").innerHTML += comentariosHtml;
}

function calificacion(score) {
  let estrellas = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= score) {
      estrellas += '<i class="fas fa-star"></i>';
    } else {
      estrellas += '<i class="far fa-star"></i>';
    }
  }
  return estrellas;
}

document.addEventListener("DOMContentLoaded", function (e) {
  let infoID = localStorage.getItem("productID");
  getJSONData(PRODUCT_INFO_URL + infoID + EXT_TYPE).then(function (resultObj) {
    if (resultObj.status === "ok") {
      productInfo = resultObj.data;
      showProductInfo(productInfo);
    }
  });
  getJSONData(PRODUCT_INFO_COMMENTS_URL + infoID + EXT_TYPE).then(function (
    resultObj
  ) {
    if (resultObj.status === "ok") {
      comentarios = resultObj.data;
      console.log(comentarios);
      showComents(comentarios);
    }
  });
});
