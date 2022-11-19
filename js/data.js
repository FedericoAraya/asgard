//DATA//

const productos = [
  {
    nombreProducto: "Bajo Asiento 4L",
    categoria: "bajo asiento",
    precio: 3000,
    imagenProducto: "./images/bajo asiento 4l.jpg",
    id: 1,
  },
  {
    nombreProducto: "Bajo Asiento 14L",
    categoria: "bajo asiento",
    precio: 5500,
    imagenProducto: "./images/bajo asiento 14l.jpg",
    id: 2,
  },
  {
    nombreProducto: "Bolso Stem",
    categoria: "sobre cuadro",
    precio: 1500,
    imagenProducto: "./images/bolso stem.jpg",
    id: 3,
  },

  {
    nombreProducto: "Medio Frame Bag",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "./images/medio fram.jpg",
    id: 4,
  },
  {
    nombreProducto: "Medio Frame Doble Suspensión",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "./images/Medio Fram dobleS.jpg",
    id: 5,
  },
  {
    nombreProducto: "Frame Completo",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "./images/frame un bolsillo.jpg",
    id: 6,
  },
  {
    nombreProducto: "Frame Doble Bolsillo",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "./images/frame bag doble bolsillo.jpg",
    id: 7,
  },
  {
    nombreProducto: "Bolso Botella ",
    categoria: "manubrio",
    precio: 6500,
    imagenProducto: "./images/porta botella manubrio.jpg",
    id: 8,
  },
  {
    nombreProducto: "Alforja Manubrio",
    categoria: "manubrio",
    precio: 6000,
    imagenProducto: "./images/alforja de manubrio.jpg",
    id: 9,
  },
];

class Producto {
  constructor(nombreProducto, categoria, precio, imagenProducto, id) {
    this.nombreProducto = nombreProducto;
    this.categoria = categoria;
    this.precio = precio;
    this.imagenProducto = imagenProducto;
    this.id = id;
  }
}

//data//

let usuarioLogueado = "deslog";
let carrito;
let usuarios = [];

if (localStorage.getItem("usuarios")) {
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
  usuarios = [
    {
      nombreUsuario: "federico",
      pass: "abc123",
      categoria: "admin",
      estado: "ok",
      email: "fede@hola.com",
    },
    {
      nombreUsuario: "juan",
      pass: "abc123",
      categoria: "user",
      estado: "ok",
      email: "fede@hola.com",
    },
  ];
}

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  carrito = [];
}

if (localStorage.getItem("usuarioLogueado")) {
  usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"));
}

const cardsCarrito = document.querySelector(".cardCarrito");

let correctorDeLink = ""
if (window.location.pathname != "/index.html") {
  correctorDeLink = "."
}

if (carrito.length > 0) {  
  renderizarCarrito();
}

function renderizarCarrito() {
  
  carrito.forEach((producto) => {
    const cardCarrito = document.createElement("div");
    cardCarrito.classList = "card mb-3";
    cardCarrito.setAttribute("idProd", producto.id);
    cardCarrito.style = "max-height: 100px;";
    cardCarrito.innerHTML = `        
        <div class="row g-0">
        <div class="col-5">
        <img
        src="${correctorDeLink}${producto.imagen}"
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
        <img  src="../images/trash.png" alt="">
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
        volumenCarrito.append(lengthCarrito)

        let sumaCarrito = 0
        
          carrito.forEach((producto)=>{
          sumaCarrito = sumaCarrito+producto.precio*producto.cantidad;
          
        })
        

        if (usuarioLogueado != "deslog") {
        const total = document.querySelector(".total");
        const comprar = document.createElement("div");
        comprar.classList = "totalCarrito";
        comprar.innerHTML = `        
        <h5>Total = $${sumaCarrito}</h5>
        <button class="botonComprar btn btn-primary">Comprar</button>
        `;
        total.innerHTML = ""  
        total.append(comprar)       
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
  
}else{
  const checkLog = document.querySelector("#checkLog");
  checkLog.classList = "";
     }

