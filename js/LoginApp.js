const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", validarLogin);

function validarLogin(e) {
  e.preventDefault();
  const usuarioIngresado = document.querySelector("#nombreUsuario").value
  const passIngresado = document.querySelector("#passUsuario").value
  const indexUsuario = usuarios.findIndex(
    (posicion) => posicion.nombreUsuario === usuarioIngresado
  );
  indexUsuario >= 0 ? verificarPass() : usuarioIncorrecto();

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
  const formRegistrarse = document.querySelector('.formRegistrarse')
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

}



}    


