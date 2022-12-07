let cartInfo = [];

function showCartInfo(array) {
    let htmlContentToAppend = "";

    for(let i = 0; i< array.length; i++) { 
        let cartInfo = array[i];

   
    htmlContentToAppend += `
    
    <div class="m-5">
    <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Costo</th>
        <th scope="col">Cantidad</th>
        <th scope="col">SubTotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src= ${cartInfo.image} class="img-thumbnail"  alt="" id="imagenCarrito"></td>
        <td>${cartInfo.name}</td>
        <td name="costoProducto">${cartInfo.unitCost}</td>
        <td><input min="1" name="cantidadProducto" value=${cartInfo.count} type="number"
        class="form-control form-control-sm" onchange="cantidadXprecio()"  /></td>
        <td name="subTotal" id="sub${i}"> </td>
      </tr>
      <tr><th>Total:</th></tr>
    </tbody>
  </table>
    <hr>
    
    <br>
          <h3> Tipo de envío:</h3>


          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
            Premium 2 a 5 días (15%)
            </label>
         </div>
          <div class="form-check">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
             <label class="form-check-label" for="flexRadioDefault2">
             Express 5 a 8 días(7%)
             </label>
         </div>
         <div class="form-check">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" checked>
             <label class="form-check-label" for="flexRadioDefault3">
             Standar 12 a 15 días(5%)
             </label>
         </div>
         <hr>
         <br>

          <h3> Dirección de envío:</h3>
          <p>  Calle: <input type="text" name="nombre" required><br><br>
          Número: <input type="text" name="nombre" required><br><br>
           Esquina: <input type="text" name="nombre" required><br><br>
          <br></p>
          <hr>


          <table class="table">
  <thead>
    <h2>Costos</h2>
  </thead>
  <tbody>
    
    <tr>
      <th scope="row">SubTotal:</th>
      
      <td name="subTotal"></td>
    </tr>
    <tr>
      <th scope="row">Costo de envío:</th>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Total:</th>
      <td ></td>
    </tr>
  </tbody>
</table>
<br><hr><br>

<h3>Forma de Pago</h3><br>
<!-- Button trigger modal -->
<p>No ha agregado una forma de pago<button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Agregar forma de pago
</button></p>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Forma de pago</h5>
        <hr>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="radioTarjeta">
        <label class="form-check-label" for="flexRadioDefault1">
        Tarjeta de credito
        </label> <hr>
        <p>Número de tarjeta<input type="text" class="form-control"></p> 
        <p>Código de seguridad<input type="text" class="form-control"></p>
        <p>Vencimientp (MM/AA)<input type="text" class="form-control"></p>
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        Transferencia bancaria
        </label><hr>
        <p>Número de cuenta<input type="text" class="form-control"></p>
        
        </div>
        <div class="modal-footer">
        
        <button type="button" class="btn btn-primary">Cerrar</button>
        </div>
        </div>
        </div>
        </div>
        <br><hr>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button"> Finalizar compra </button>
       </div>
        
        






      </div>


  

    `;
    
    }
    document.getElementById("Cart-list").innerHTML =
      htmlContentToAppend;
  }

  function BloqueoModal(){
    if(n){

    }
  }



  function cantidadXprecio() {
    let cantidad = document.getElementsByName("cantidadProducto") ;
    let costo = document.getElementsByName("costoProducto");
    let subTotales = document.getElementsByName("subTotal");
    for (let i=0; i<cantidad.length; i++){

      let subtotal = parseFloat(cantidad[i].value) * parseFloat(costo[i].innerHTML);
      subTotales[i].innerHTML=subtotal
  }


  }

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(CART_INFO_URL +"25801"+ EXT_TYPE).then(function (resultObj) {
      if (resultObj.status === "ok") {
        cartInfo = resultObj.data.articles;
        showCartInfo(cartInfo);
      }
    });

   

});