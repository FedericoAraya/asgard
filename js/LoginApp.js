if(usuarioLogueado != "deslog"){
const formRegistrarse = document.querySelector('#formRegistrarse')
const botonRegistrarse = document.querySelector('.botonRegistrarse') 
const botonLog = document.querySelector('.botonLog')
const deslog = document.querySelector('.deslog') 
const formLogin = document.querySelector('#formLogin')
formRegistrarse.classList = 'd-none'
botonRegistrarse.classList = 'd-none'
botonLog.classList = "btn btn-primary botonLog d-none"
deslog.classList = "btn btn-primary deslog"
formLogin.classList = 'd-none'
}

const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", validarLogin);

function validarLogin(e) {
  e.preventDefault();
  const usuarioIngresado = document.querySelector("#nombreUsuario").value
  const passIngresado = document.querySelector("#passUsuario").value
  const limpiarUsuarioIngresado = document.querySelector("#nombreUsuario")
  const limpiarPassIngresado = document.querySelector("#passUsuario")
  const indexUsuario = usuarios.findIndex(
  (posicion) => posicion.nombreUsuario === usuarioIngresado
  );
  indexUsuario >= 0 ? verificarPass() : usuarioIncorrecto();

  limpiarUsuarioIngresado.addEventListener("keyup", limpiarUsuarioIncorrecto);
  limpiarPassIngresado.addEventListener("keyup", limpiarPassIincorrecta);

  function limpiarUsuarioIncorrecto () {
    const usuarioIncorrecto = document.querySelector(".usuarioIncorrecto")
    usuarioIncorrecto.innerHTML = ""
  }
  function limpiarPassIincorrecta (){
    const contrasenaIncorrecta = document.querySelector(".contrasenaIncorrecta")
    contrasenaIncorrecta.innerHTML = ""
  }

function verificarPass() {
  usuarios[indexUsuario].pass == passIngresado ? loguear(): passIncorrecto();
}

function usuarioIncorrecto(){
  const usuarioIncorrecto = document.querySelector('.usuarioIncorrecto')
  usuarioIncorrecto.innerHTML = "Usuario Incorrecto"
}
function passIncorrecto(){
  const contrasenaIncorrecta = document.querySelector('.contrasenaIncorrecta')
  contrasenaIncorrecta.innerHTML = "Contraseña Incorrecta"
}
function loguear(){
  const logoLogin = document.querySelectorAll('.logoLogin')
  const saludo = document.querySelectorAll('.saludo')
  const formRegistrarse = document.querySelector('#formRegistrarse')
  const botonRegistrarse = document.querySelector('.botonRegistrarse') 
  const botonLog = document.querySelector('.botonLog')
  const deslog = document.querySelector('.deslog') 
  const formLogin = document.querySelector('#formLogin')
    saludo[0].innerHTML = `Hola, ${usuarioIngresado}`    
    saludo[1].innerHTML = `Hola, ${usuarioIngresado}`  
    logoLogin[0].style.backgroundColor = "#66c70c"
    logoLogin[0].style.borderRadius = "40px"
    logoLogin[1].style.backgroundColor = "#66c70c"
    logoLogin[1].style.borderRadius = "40px"
    formRegistrarse.classList = 'd-none'
    botonRegistrarse.classList = 'd-none'
    botonLog.classList = "btn btn-primary botonLog d-none"
    deslog.classList = "btn btn-primary deslog"
    formLogin.classList = 'd-none'
    if (usuarios[indexUsuario].categoria == "admin" ){
      const adminVisibleM = document.querySelector('.adminVisibleM')
      const adminVisibleD = document.querySelector('.adminVisibleD')
      adminVisibleD.classList = 'nav-link d-block adminVisibleD'
      adminVisibleM.classList = 'nav-item d-block adminVisibleM'
    }
    const index = usuarios.findIndex(
      (posicion) => posicion.nombreUsuario === usuarioIngresado )
      localStorage.setItem('usuarioLogueado', index)
}
}  
const logOut = document.querySelector(".deslog");
logOut.addEventListener("click", funLogOut);
function funLogOut(){
  localStorage.removeItem("usuarioLogueado")
    location.reload()
}

 const formRegistrarse = document.getElementById("formRegistrarse");
 formRegistrarse.addEventListener("submit", validarRegistro);

 function validarRegistro(e) {
   e.preventDefault();
   const nombreUsuario = document.querySelector('#nombreUsuarioR').value
   const nombreUsuarioLimpiar = document.querySelector('#nombreUsuarioR')
   const emailUsuario = document.querySelector('#emailUsuarioR').value
   const passUsuario = document.querySelector('#passUsuarioR').value
   const confirmPass = document.querySelector('#confirmPassR').value
   const confirmPassLimpiar = document.querySelector('#confirmPassR')

   const usuarioExistente = usuarios.some((usuario) => usuario.nombreUsuario === nombreUsuario)
 
   nombreUsuarioLimpiar.addEventListener("keyup", limpiarUsuarioExistente);
   confirmPassLimpiar.addEventListener("keyup", limpiarPassNoCoincide);

   usuarioExistente == true ? nombreUsuarioYaExiste() : registrarUsuario() ;
  
   function limpiarUsuarioExistente () {
     const usuarioExistente = document.querySelector(".usuarioExistente")
     usuarioExistente.innerHTML = ""
   }
   function limpiarPassNoCoincide (){
     const passNoCoincide = document.querySelector(".passNoCoincide")
     passNoCoincide.innerHTML = ""
   }

   function nombreUsuarioYaExiste (){
     const usuarioExistente = document.querySelector(".usuarioExistente")
     usuarioExistente.innerHTML = "El nombre de usuario ya existe"
   }
   function registrarUsuario (){
     if (passUsuario === confirmPass){
       crearUsuario()
       formRegistrarse.reset()
     }else{
       const passNoCoincide = document.querySelector(".passNoCoincide")
       passNoCoincide.innerHTML = "La contraseña no coincide"
     }

     function crearUsuario() {
       class Usuario {
         constructor(nombreUsuario, pass, categoria, estado, email) {
           this.nombreUsuario = nombreUsuario;
           this.pass = pass;
           this.categoria = categoria;
           this.estado = estado;
           this.email = email;
         }
       }
          const user = new Usuario(
           nombreUsuario,
           passUsuario,
           "user",
           "ok",
           emailUsuario,
         );
         usuarios.push(user);
         localStorage.setItem('usuarios', JSON.stringify(usuarios))
           const index = usuarios.findIndex(
           (posicion) => posicion.nombreUsuario === nombreUsuario )
           localStorage.setItem('usuarioLogueado', index)
           location.reload()
     } 
   }
 }
