// Variables

// Selectores
// const searchBarInput = document.querySelector('#searchBarInput')
// const searchBarButton = document.querySelector('#searchBarButton')
const cardProductos = document.getElementById('productosTienda')


// Funciones
const renderizarTienda = () => {
    productos.forEach((producto) => {
        const cardProducto = document.createElement('div') 
        cardProducto.classList = 'card m-auto mb-3'
        cardProducto.style = "width: 18rem;"
        cardProducto.innerHTML = `
        
        <img src="${producto.imagenProducto}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombreProducto}</h5>
          <p class="card-text">${producto.categoria}</p>
          <p class="card-text">$${producto.precio}</p>
          <a href="#" class="btn btn-primary">Agregar al Carrito</a>
        </div>
      </div>`

      

        console.log(cardProducto);
        cardProductos.append(cardProducto)
    })
   /* const buttonsCTA = document.querySelectorAll('.buttonCTA')
    buttonsCTA.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target);
        })
    })*/
}


// Listeners
/*
searchBarButton.addEventListener('click', () => {
    console.log(searchBarInput.value);
})*/

// Ejecuciones
renderizarTienda()