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
        <button class="btn">
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
  let unidadesCarrito = 0;
  carrito.forEach((producto) => {
    unidadesCarrito = unidadesCarrito + producto.cantidad;
  });

  const lengthCarrito = document.createElement("div");
  lengthCarrito.classList = "volumenCarrito";
  lengthCarrito.innerHTML = `        
                    <p class="lengthCarrito">${unidadesCarrito}</p>      
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
    if (carrito[indexProd].cantidad === 1) {
      eliminarProducto(e);
    } else {
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

    carrito.splice(indexProd, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cardsCarrito.innerHTML = "";
    renderizarCarrito();

    Toastify({
      text: `${productos[indexProd].nombreProducto} fue borrado de su carrito`,
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "bottom",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "red",
      },
      onClick: function () {},
    }).showToast();
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
    total.classList = "total";

    const botonComprar = document.querySelector(".botonComprar");
    botonComprar.addEventListener("click", realizarCompra);

    function realizarCompra() {
      Swal.fire({
        title: '<p>Confirmación de compra</p>',
        grow: "fullscreen",
        backdrop: true,
        allowOutsideClick:false,
        width : "100% !important" ,
        padding: "0px !important",
        margin: "0px !important",
      
        html:
        `<div class="compra d-flex flex-column flex-md-row">        
        <div class="cardsCompra col-12 col-md-6">
        </div>
        <div class="datosEnvio col-12 col-md-6">
        <h5> Datos de envío </h5>
        </div>
        </div>`,
        
        showCloseButton: false,        
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonColor:"red",
        confirmButtonAriaLabel: 'Thumbs up, great!',
              })
              
              const cardsCompra = document.querySelector(".cardsCompra");
              console.log(cardsCompra);
              carrito.forEach((producto) => {
                const cardCompra = document.createElement("div");
                cardCompra.classList = "card mb-3";
                cardCompra.setAttribute("idCarrito", producto.id);
                cardCompra.style = "max-height: 100px;";
                cardCompra.innerHTML = `        
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
                    <small >Cantidad : ${producto.cantidad}</small >
                    </div>
                    </div>
                    </div>
                    </div>       
                    `;
            
                cardsCompra.append(cardCompra);
              }); 

      // carrito = [];
      // localStorage.setItem("carrito", JSON.stringify(carrito));
      // cardsCarrito.innerHTML = "";
      // total.innerHTML = "";

      // renderizarCarrito();
      // total.classList = "d-none";
    }
    
    
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
