

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  carrito = [];
}

if (localStorage.getItem("usuarioLogueado")) {
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
}

const cardsCarrito = document.querySelector(".cardCarrito");
if (carrito.length > 0) {
  renderizarCarrito();
}

function renderizarCarrito() {
  var ajustarLink = ".";
  if (
    window.location.pathname === "/index.html" ||
    window.location.pathname === "/asgard" ||
    window.location.pathname === "/asgard/index.html" ||
    window.location.pathname === "/asgard/"
  ) {
    ajustarLink = " ";
  }
  carrito.forEach((producto) => {
    const cardCarrito = document.createElement("div");
    cardCarrito.classList = "card mb-3";
    cardCarrito.setAttribute("idCarrito", producto.id);
    cardCarrito.style = "max-height: 100px;";
    cardCarrito.innerHTML = `        
        <div class="row g-0">
        <div class="col-5">
        <img
        src="${ajustarLink + producto.imagen}"
        class="rounded-start"
        alt="..."
        />
        </div>
        <div class="col-7">
        <div class="card-body">
        <h5 >${producto.nombreProducto}</h5>
        <p class="precioCard">$${producto.precio}</p>
        <div class=" itemsCantidad">
        <small >Cantidad : <button class="btn sumarUno ">+
        </button>${producto.cantidad}<button class="btn restarUno ">
        -</button></small>
        <button class="btn trash ">
        <img class="trash " src="${ajustarLink}./images/trash.png" alt="">
        </button>
        </div>
        </div>
        </div>
        </div>       
        `;

    cardsCarrito.append(cardCarrito);
  });
  const volumenCarrito = document.querySelector(".carrito");

  const lengthCarrito = document.createElement("div");
  lengthCarrito.classList = "volumenCarrito";
  lengthCarrito.innerHTML = `        
                    <p class="lengthCarrito">${carrito.length}</p>      
              `;
  volumenCarrito.append(lengthCarrito);

  let sumaCarrito = 0;

  carrito.forEach((producto) => {
    sumaCarrito = sumaCarrito + producto.precio * producto.cantidad;
  });

  const botonSumarUnidad = document.querySelectorAll(".sumarUno");
  botonSumarUnidad.forEach((boton) => {
    boton.addEventListener("click", sumarProducto);
  });

  const botonRestarUnidad = document.querySelectorAll(".restarUno");
  botonRestarUnidad.forEach((boton) => {
    boton.addEventListener("click", restarProducto);
  });

  const botonEliminaProd = document.querySelectorAll(".trash");
  botonEliminaProd.forEach((boton) => {
    boton.addEventListener("click", eliminarProducto);
  });

  function sumarProducto(e) {
    const productoSeleccionado = e.target
      .closest(".card")
      .getAttribute("idCarrito");
    const indexProd = carrito.findIndex(
      (posicion) => posicion.id == productoSeleccionado
    );
    carrito[indexProd].cantidad = carrito[indexProd].cantidad + 1;

    localStorage.setItem("carrito", JSON.stringify(carrito));
    cardsCarrito.innerHTML = "";
    renderizarCarrito();
  }

  function restarProducto(e) {
    const productoSeleccionado = e.target
      .closest(".card")
      .getAttribute("idCarrito");
    const indexProd = carrito.findIndex(
      (posicion) => posicion.id == productoSeleccionado
    );
    if(carrito[indexProd].cantidad === 1){
      eliminarProducto(e)
    }else{
    carrito[indexProd].cantidad = carrito[indexProd].cantidad - 1;
  }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    cardsCarrito.innerHTML = "";
    renderizarCarrito();
  }

function eliminarProducto(e) {
  const productoSeleccionado = e.target
    .closest(".card")
    .getAttribute("idCarrito");
  const indexProd = carrito.findIndex(
    (posicion) => posicion.id == productoSeleccionado
  );
   carrito.splice(indexProd,1)
 
  localStorage.setItem("carrito", JSON.stringify(carrito));
  cardsCarrito.innerHTML = "";
  renderizarCarrito();
}

  if (usuarioLogueado != "deslog") {
    const total = document.querySelector(".total");
    const comprar = document.createElement("div");
    comprar.classList = "totalCarrito";
    comprar.innerHTML = `        
        <h5>Total = $${sumaCarrito}</h5>
        <button class="botonComprar btn btn-primary">Comprar</button>
        `;
    total.innerHTML = "";
    total.append(comprar);
  }
}



if (usuarioLogueado != "deslog") {
  const logoLogin = document.querySelectorAll(".logoLogin");
  const saludo = document.querySelectorAll(".saludo");
  saludo[0].innerHTML = `Hola, ${usuarios[usuarioLogueado].nombreUsuario}`;
  saludo[1].innerHTML = `<h5>${usuarios[usuarioLogueado].nombreUsuario}, estos son tus productos seleccionados:</h5>`;
  logoLogin[0].style.backgroundColor = "#66c70c";
  logoLogin[0].style.borderRadius = "40px";
  logoLogin[1].style.backgroundColor = "#66c70c";
  logoLogin[1].style.borderRadius = "40px";
  if (usuarios[usuarioLogueado].categoria == "admin") {
    const adminVisibleM = document.querySelector(".adminVisibleM");
    const adminVisibleD = document.querySelector(".adminVisibleD");
    adminVisibleD.classList = "nav-link d-block adminVisibleD";
    adminVisibleM.classList = "nav-item d-block adminVisibleM";
  }
} else {
  const checkLog = document.querySelector("#checkLog");
  checkLog.classList = "";
}
