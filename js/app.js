fetch("/asgard/json/data.json")
.then((respuesta) => respuesta.json())
.then((data)=> {
  productos = data;
  })


function header() {
  const divHeader = document.getElementById("header");
  divHeader.innerHTML = `
  <div class="nav-responsive">
  <nav class="navbar d-md-none nav-mobile">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <img
          src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194828/menu-hamburguesa_cocaf5.png"
          alt="menu hamburguesa"
        />
      </button>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <img src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194947/logo-asgard_pc4cka.png" alt="Logo Asgard" />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>              
        </div>
        <h5 class="saludo m-3"></h5>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="/asgard/index.html"
                >Inicio</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/asgard/pages/tienda.html">Tienda</a>
            </li>
                        <li class="nav-item">
              <a class="nav-link" href="/asgard/pages/pagosYEnvios.html"
                >Pagos y Envios</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/asgard/pages/contacto.html">Contacto</a>
            </li>
            <li class="nav-item d-none adminVisibleM">
              <a class="nav-link" href="/asgard/pages/admin.html">Admin</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link d-flex flex-row login"
                href="/asgard/pages/login.html"
                ><img  class="logoLogin" src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670195016/loginIcon_lk4ow4.png" alt="Icono Login" />
                <p class="p-2">LOGIN</p></a
              >
               </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <nav class="navbar nav-desck d-none d-md-block">
    <div class="container-fluid">
      <a class="navbar-brand" href="/asgard/index.html"
        ><img src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194947/logo-asgard_pc4cka.png" alt="Logo Asgard"
      /></a>
      <div class="navbar-nav">
        <a
          class="nav-link active"
          aria-current="page"
          href="/asgard/index.html"
          >Inicio</a
        >
        <a class="nav-link" href="/asgard/pages/tienda.html">Tienda</a>            
        <a class="nav-link" href="/asgard/pages/pagosYEnvios.html">Pagos y Envios</a>
        <a class="nav-link" href="/asgard/pages/contacto.html">Contactos</a>
        <a class="nav-link adminVisibleD d-none" href="/asgard/pages/admin.html"
          >Admin</a
        >
        <a class="nav-link" href="/asgard/pages/login.html"
          ><button class="btn btn-ligth">
            <img
              class="logoLogin"
              src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670195016/loginIcon_lk4ow4.png"
              alt="Icono Login"
            /></button
        ></a>
      </div>
    </div>
  </nav>
</div>
<a class="navbar-brand d-md-none" href="/asgard/index.html"
  ><img src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670194947/logo-asgard_pc4cka.png" alt="Logo Asgard"
/></a>
<div id="carrito">
  <button
    class="btn btn-ligth carrito"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasScrolling"
    aria-controls="offcanvasScrolling"
  >
  <img src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670078413/carrito_u1x8hu.png" alt="Carrito" />
  <div class="volumenCarrito d-none">  
 
  </div>     
  </button>
  <div
    class="offcanvas offcanvas-end collapse"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel">
    <div class="offcanvas-header">          
      <h4 class="offcanvas-title" id="offcanvasScrollingLabel">
        Carrito
      </h4>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <h6 class="saludo m-2" ></h6>
    <div id="checkLog"   class="d-none">
      <p>Para comprar debes estar <a href="/asgard/pages/login.html">Registrado</a></p>
    </div>
    <div class="offcanvas-body">
      <div class="cardCarrito">
       </div>
        <div class="total">
      </div>
      </div>
    </div>
  </div>
</div> 

  `;
}
header();

function footer() {
  const divFooter = document.getElementById("footer");
  divFooter.innerHTML = `
  <div class="redes">
  <a href=""><img src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670078413/whatsapp_wvrlyb.png" alt="Logo WhatsApp" /></a>
  <a href=""><img src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670078334/instagram_ezxrhb.png" alt="Logo instagram" /></a>
</div>
<div class="copirigth">
  <p>By.Asgard ©</p>
</div>
  `;
}
footer();

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
  carrito.forEach((producto) => {
    const cardCarrito = document.createElement("div");
    cardCarrito.classList = "card mb-3";
    cardCarrito.setAttribute("idCarrito", producto.id);
    cardCarrito.style = "max-height: 100px;";
    cardCarrito.innerHTML = `        
        <div class="row g-0">
        <div class="col-5">
        <img
        src="${producto.imagen}"
        class="rounded-start"
        alt="${producto.nombreProducto}"
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
        <img class="trash " src="https://res.cloudinary.com/dyksknsxc/image/upload/v1670078413/trash_e5nspl.png" alt="trash">
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
  
  let lengthCarrito = document.querySelector(".volumenCarrito");
  lengthCarrito.classList = "volumenCarrito";
  if (unidadesCarrito > 0) {
    lengthCarrito.innerHTML = `        
                    <p class="lengthCarrito">${unidadesCarrito}</p>      
              `;
  } else {
    lengthCarrito.classList = "d-none volumenCarrito";
  }

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

  if (usuarioLogueado != "deslog") {
    const total = document.querySelector(".total");
    const comprar = document.createElement("div");
    comprar.classList = "totalCarrito";
    comprar.innerHTML = `        
        <h5>Total = $${sumaCarrito}</h5>
        <button class="botonComprar btn btn-primary">Comprar</button>
        `;

    total.innerHTML = "";
    if (carrito.length > 0) {
      total.append(comprar);
      total.classList = "total";
    }
    if (carrito.length > 0){
    const botonComprar = document.querySelector(".botonComprar");
    botonComprar.addEventListener("click", realizarCompra);
  }
    function realizarCompra() {
      Swal.fire({
        title: "<p>Confirmación de compra</p>",
        grow: "fullscreen",
        backdrop: true,
        allowOutsideClick: false,
        width: "100% !important",
        padding: "0px !important",

        html: `<div class="compra d-flex flex-column flex-md-row">        
        <div class=" col-12 col-md-6">
        <div class="cardsCompra">
        </div>
        <h5  class="mt-4">Total = $${sumaCarrito}</h5>
        </div>
        
        <div class="datosEnvio col-12 col-md-6">
        <h5> Datos de envío: </h5>
        <form action="submit">
        <input class="nombre" type="text" placeholder="Nombre">
        <input class="apellido" type="text" placeholder="Apellido">
        <input class="provincia" type="text" placeholder="Provincia">
        <input class="ciudad" type="text" placeholder="Ciudad">
        <input type="text" class="direccion" placeholder="Dirección">
        <input type="text" class="barrio" placeholder="Barrio">
        <input type="tel" class="telefono" placeholder="Teléfono">
    </form>
        </div>
        </div>`,

        showCloseButton: true,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Pagar',
        customClass: {
          confirmButton: "irAlPago",
        },
        confirmButtonColor: "red",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "<p>Confirmación de compra</p>",
            grow: "fullscreen",
            backdrop: true,
            allowOutsideClick: false,
            width: "100% !important",
            padding: "0px !important",

            html: `
            <h5  class="mt-4">Total = $${sumaCarrito}</h5>
            
            
            <div class="datosPago col-12">
            <h5> Datos de pago: </h5>
            <div class="checkout">  
  <form id="formTarjeta" autocomplete="off" novalidate>
    <fieldset>
      <label for="card-number">Número de Tarjeta</label>
      <div>
      <input type="number" id="card-number" class="input-cart-number" maxlength="4" />
      <input type="number" id="card-number-1" class="input-cart-number" maxlength="4" />
      <input type="number" id="card-number-2" class="input-cart-number" maxlength="4" />
      <input type="number" id="card-number-3" class="input-cart-number" maxlength="4" />
      </div>
    </fieldset>
    <fieldset>
      <label for="card-holder">Nombre</label>
      <input type="text" id="card-holder" />
    </fieldset>
    <fieldset class="fieldset-expiration">
      <label for="card-expiration-month">Validez</label>
      <div class="select">
        <select id="card-expiration-month">
          <option></option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <div class="select">
        <select id="card-expiration-year">
          <option></option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
          <option>2031</option>
        </select>
      </div>
    </fieldset>
    <fieldset class="fieldset-ccv">
      <label for="card-ccv">CCV</label>
      <input type="number" id="card-ccv" maxlength="3" />
    </fieldset>
    </form>
</div>
            </div>
            </div>`,

            showCloseButton: true,
            confirmButtonText: '<i class="fa fa-thumbs-up"></i> Confirmar pago',
            confirmButtonColor: "red",
            confirmButtonAriaLabel: "Thumbs up, great!",
          });
        }
      });

      const cardsCompra = document.querySelector(".cardsCompra");
      carrito.forEach((producto) => {
        const cardCompra = document.createElement("div");
        cardCompra.classList = "card mb-3";
        cardCompra.setAttribute("idCarrito", producto.id);
        cardCompra.style = "max-height: 100px;";
        cardCompra.innerHTML = `        
                    <div class="row g-0">
                    <div class="col-5">
                    <img
                    src="${producto.imagen}"
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

