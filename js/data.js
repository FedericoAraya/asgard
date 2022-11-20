class Producto {
    constructor(nombreProducto, categoria, precio, imagenProducto, id) {
      this.nombreProducto = nombreProducto;
      this.categoria = categoria;
      this.precio = precio;
      this.imagenProducto = imagenProducto;
      this.id = id;
    }
}

const producto1 = new Producto("Bajo Asiento 4L", 'bajo asiento', 5400 , "./images/bajo asiento 4l.jpg", 1)
const producto2 = new Producto("Bajo Asiento 14L", 'bajo asiento', 8500 ,  "./images/bajo asiento 14l.jpg", 2)
const producto3 = new Producto("Bolso Stem", "sobre cuadro", 3600 , "./images/bolso stem.jpg", 3)
const producto4 = new Producto("Medio Frame Bag", "frame bag", 7000 ,"./images/medio fram.jpg", 4)
const producto5 = new Producto("Medio Frame Doble Suspensión", "frame bag", 6200,"./images/Medio Fram dobleS.jpg", 5)
const producto6 = new Producto("Frame Completo", "frame bag", 7000, "./images/frame un bolsillo.jpg", 6)
const producto7 = new Producto( "Frame Doble Bolsillo", "frame bag", 8200 , "./images/frame bag doble bolsillo.jpg",7)
const producto8 = new Producto("Bolso Botella ", "manubrio", 3200 , "./images/porta botella manubrio.jpg", 8)
const producto9 = new Producto("Alforja Manubrio", "manubrio", 6800 , "./images/alforja de manubrio.jpg", 9)

const productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9]

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