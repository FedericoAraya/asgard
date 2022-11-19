const cardProductos = document.getElementById("productosTienda");

const renderizarTienda = () => {
  productos.forEach((producto) => {
    const cardProducto = document.createElement("div");
    cardProducto.classList = "card m-auto mb-3 agregarAlCarrito";
    cardProducto.setAttribute("idProd", producto.id);
    cardProducto.style = "width: 18rem;";
    cardProducto.innerHTML = `        
        <img src=".${producto.imagenProducto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombreProducto}</h5>
          <p class="card-text">${producto.categoria}</p>
          <p class="card-text">$${producto.precio}</p>
          <button class="btn btn-primary ">Agregar al Carrito</button>
        </div>
      </div>`;
    cardProductos.append(cardProducto);
  });
  const botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
  botonAgregarAlCarrito.forEach((boton) => {
    boton.addEventListener("click", agregarProdusctoCarrito);
  });
};

function agregarProdusctoCarrito(e) {
  const productoSeleccionado = e.target
    .closest(".agregarAlCarrito")
    .getAttribute("idProd");

  const indexProd = productos.findIndex(
    (posicion) => posicion.id == productoSeleccionado
  );

  if (
    carrito.some(
      (producto) =>
        producto.nombreProducto == productos[indexProd].nombreProducto
    ) == true
  ) {
    const indexSumarProd = carrito.findIndex(
      (posicion) => posicion.id == productoSeleccionado
    );
    carrito[indexSumarProd].cantidad = carrito[indexSumarProd].cantidad + 1;
    
  } else {
    class ProductoCarrito {
      constructor(nombreProducto, precio, imagen, cantidad, id) {
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.imagen = imagen;
        this.cantidad = cantidad;
        this.id = id;
      }
    }
    const prod = new ProductoCarrito(
      productos[indexProd].nombreProducto,
      productos[indexProd].precio,
      productos[indexProd].imagenProducto,
      1,
      productos[indexProd].id
    );

    carrito.push(prod);
      
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cardsCarrito.innerHTML = ""
  
  renderizarCarrito()

}

renderizarTienda();
