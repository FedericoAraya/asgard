let totalProductos = []
let productosAgregados = []
let productos = []


let usuarioLogueado = "deslog";
let carrito;
let usuarios = [];

if (localStorage.getItem("usuarios")) {
  usuarios = JSON.parse(localStorage.getItem("usuarios"));
} else {
  usuarios = [
    {
      nombreUsuario: "admin",
      pass: "admin",
      categoria: "admin",
      estado: "ok",
      email: "admin@hola.com",
    },
    {
      nombreUsuario: "juan",
      pass: "juan123",
      categoria: "user",
      estado: "ok",
      email: "juan@hola.com",
    },
  ];
}