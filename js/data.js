//DATA//
const categorias = ["Bajo Asiento", "Sobre Cuadro", "Frame Bag"];

const productos = [
  {
    nombreProducto: "Bajo Asiento 4L",
    categoria: "bajo asiento",
    precio: 3000,
    stock: 5,
  },
  {
    nombreProducto: "Bajo Asiento 12L",
    categoria: "bajo asiento",
    precio: 5500,
    stock: 3,
  },
  {
    nombreProducto: "Bolso Stem",
    categoria: "sobre cuadro",
    precio: 1500,
    stock: 10,
  },
  {
    nombreProducto: "Bolso Vela",
    categoria: "sobre cuadro",
    precio: 1800,
    stock: 4,
  },
  {
    nombreProducto: "Frame Completo",
    categoria: "frame bag",
    precio: 6500,
    stock: 7,
  },
];

const usuarios = [
  {
    nombreUsuario: "federico",
    pass: "abc123",
    newsleter: "no",
    categoria: "admin",
    estado: "ok",
    email: "fede@hola.com",
  },
  {
    nombreUsuario: "juan",
    pass: "abc123",
    newsleter: "no",
    categoria: "user",
    estado: "ok",
    email: "fede@hola.com",
  },
];
class Producto {
  constructor(nombreProducto, categoria, precio) {
    this.nombreProducto = nombreProducto;
    this.categoria = categoria;
    this.precio = precio;
  }
}
class ProductoCarrito {
  constructor(nombreProducto, categoria, precio) {
    this.nombreProducto = nombreProducto;
    this.categoria = categoria;
    this.precio = precio;
  }
}

const carrito = [];

//data//