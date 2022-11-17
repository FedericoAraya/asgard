
//DATA//
const categorias = ["Bajo Asiento", "Sobre Cuadro", "Frame Bag","Manubrio"];

const productos = [
  {
    nombreProducto: "Bajo Asiento 4L",
    categoria: "bajo asiento",
    precio: 3000,
    imagenProducto: "../images/bajo asiento 4l.jpg"
  },
  {
    nombreProducto: "Bajo Asiento 14L",
    categoria: "bajo asiento",
    precio: 5500,
    imagenProducto: "../images/bajo asiento 14l.jpg"
  },
  {
    nombreProducto: "Bolso Stem",
    categoria: "sobre cuadro",
    precio: 1500,
    imagenProducto: "../images/bolso stem.jpg"
    
  },
  {
    nombreProducto: "Alforja Manubrio",
    categoria: "manubrio",
    precio: 1800,
    imagenProducto: "../images/alforja de manubrio.jpg"
  },
  {
    nombreProducto: "Medio Frame Bag",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "../images/medio fram.jpg"

  },
  {
    nombreProducto: "Medio Frame Doble Suspensión",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "../images/Medio Fram dobleS.jpg"

  },
  {
    nombreProducto: "Frame Completo",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "../images/frame un bolsillo.jpg"

  },
  {
    nombreProducto: "Frame Doble Bolsillo",
    categoria: "frame bag",
    precio: 6500,
    imagenProducto: "../images/frame bag doble bolsillo.jpg"

  },
  {
    nombreProducto: "Bolso Botella ",
    categoria: "manubrio",
    precio: 6500,
    imagenProducto: "../images/porta botella manubrio.jpg"

  },
];


class Producto {
  constructor(nombreProducto, categoria, precio, imagenProducto) {
    this.nombreProducto = nombreProducto;
    this.categoria = categoria;
    this.precio = precio;
    this.imagenProducto = imagenProducto;
  }
}
class ProductoCarrito {
  constructor(nombreProducto, categoria, precio) {
    this.nombreProducto = nombreProducto;
    this.categoria = categoria;
    this.precio = precio;
  }
}



//data//

let usuarioLogueado = "deslog"
let carrito 
let usuarios =[]

if (localStorage.getItem('usuarios')) {
  usuarios = JSON.parse(localStorage.getItem('usuarios'))
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
  ]
 
}


if (localStorage.getItem('carrito')) {
  carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
  carrito = []
}
if (localStorage.getItem('usuarioLogueado')) {
  usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'))
} 

if(usuarioLogueado != "deslog"){
  const logoLogin = document.querySelectorAll('.logoLogin')
  const saludo = document.querySelectorAll('.saludo')
    saludo[0].innerHTML = `Hola, ${usuarios[usuarioLogueado].nombreUsuario}`    
    saludo[1].innerHTML = `Hola, ${usuarios[usuarioLogueado].nombreUsuario}`  
    logoLogin[0].style.backgroundColor = "#66c70c"
    logoLogin[0].style.borderRadius = "40px"
    logoLogin[1].style.backgroundColor = "#66c70c"
    logoLogin[1].style.borderRadius = "40px"
    if (usuarios[usuarioLogueado].categoria == "admin" ){
      const adminVisibleM = document.querySelector('.adminVisibleM')
      const adminVisibleD = document.querySelector('.adminVisibleD')
      adminVisibleD.classList = 'nav-link d-block adminVisibleD'
      adminVisibleM.classList = 'nav-item d-block adminVisibleM'
    }
    
}



