
const cardProductos = document.getElementById('productosTienda')


const renderizarTienda = () => {
    productos.forEach((producto) => {
        const cardProducto = document.createElement('div') 
        cardProducto.classList = 'card m-auto mb-3 agregarAlCarrito'
        cardProducto.setAttribute('idProd', producto.id)
        cardProducto.style = "width: 18rem;"
        cardProducto.innerHTML = `        
        <img src="${producto.imagenProducto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombreProducto}</h5>
          <p class="card-text">${producto.categoria}</p>
          <p class="card-text">$${producto.precio}</p>
          <button class="btn btn-primary ">Agregar al Carrito</button>
        </div>
      </div>`     
        cardProductos.append(cardProducto)
    })
    const botonAgregarAlCarrito = document.querySelectorAll('.agregarAlCarrito')
    botonAgregarAlCarrito.forEach((boton) => {
        boton.addEventListener('click', agregarProdusctoCarrito)
    })
0
}

function agregarProdusctoCarrito(e) {
    
    
    const productoSeleccionado = e.target.closest('.agregarAlCarrito').getAttribute("idProd")
    console.log(productoSeleccionado);
    const indexProd = productos.findIndex(
        (posicion) => posicion.id == productoSeleccionado
        );
        console.log(indexProd);  
    class ProductoCarrito {
        constructor(nombreProducto, precio, imagen) {
          this.nombreProducto = nombreProducto;
          this.precio = precio;
          this.imagen = imagen;
        }
      }    
       const prod = new ProductoCarrito(
        productos[indexProd].nombreProducto,
        productos[indexProd].precio,
        productos[indexProd].imagen,
      );

      carrito.push(prod);
      localStorage.setItem('carrito', JSON.stringify(carrito))
      console.log(carrito);
       
       
   
        }

        renderizarTienda()