class Producto {
    constructor(nombreProducto, categoria, precio, imagenProducto, id, colores) {
      this.nombreProducto = nombreProducto;
      this.categoria = categoria;
      this.precio = precio;
      this.imagenProducto = imagenProducto;
      this.id = id;
      this.colores = colores;
    }
}

const producto1 = new Producto("Bajo Asiento 4L", 'bajo asiento', 5400 ,"https://res.cloudinary.com/dyksknsxc/image/upload/v1670078414/bajo_asiento_4l_a996ni.jpg", 1,["negro","verde","naranja","coyote"])
const producto2 = new Producto("Bajo Asiento 14L", 'bajo asiento', 8500 ,  "https://res.cloudinary.com/dyksknsxc/image/upload/v1670078414/bajo_asiento_14l_ypggif.jpg", 2,["negro","negro c/bolsa gris"])
const producto3 = new Producto("Bolso Stem", "sobre cuadro", 3600 , "https://res.cloudinary.com/dyksknsxc/image/upload/v1670078413/bolso_stem_a1m3xm.jpg", 3,["negro","verde","naranja","coyote"])
const producto4 = new Producto("Medio Frame Bag", "frame bag", 7000 ,"https://res.cloudinary.com/dyksknsxc/image/upload/v1670200584/medio_fram_atldab.jpg", 4,["Segun disponibilidad"])
const producto5 = new Producto("Medio Frame Doble Suspensión", "frame bag", 6200,"https://res.cloudinary.com/dyksknsxc/image/upload/v1670078414/Medio_Fram_dobleS_dbrqgj.jpg", 5,["Segun disponibilidad"])
const producto6 = new Producto("Frame Completo", "frame bag", 7000, "https://res.cloudinary.com/dyksknsxc/image/upload/v1670078414/frame_un_bolsillo_v0byfm.jpg", 6,["Segun disponibilidad"])
const producto7 = new Producto("Frame Doble Bolsillo", "frame bag", 8200 , "https://res.cloudinary.com/dyksknsxc/image/upload/v1670078414/frame_bag_doble_bolsillo_o5dxxq.jpg",7,["Segun disponibilidad"])
const producto8 = new Producto("Bolso Botella ", "manubrio", 3200 , "https://res.cloudinary.com/dyksknsxc/image/upload/v1670078413/porta_botella_manubrio_t9squr.jpg", 8,["negro"])
const producto9 = new Producto("Alforja Manubrio", "manubrio", 6800 , "https://res.cloudinary.com/dyksknsxc/image/upload/v1670078574/alforja_de_manubrio_gajdqk.jpg", 9,["negro","negro c/bolsa gris"])

const productos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9]


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