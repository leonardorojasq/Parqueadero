// Leonardo Rojas 2022
window.load = (function () {
  //funcion par acarga la fecha actual
  var fecha = new Date();
  document.getElementById("FechaActual").value = fecha.toJSON().slice(0, 10);
})();

function actual() {
  var fecha = new Date(); //Actualizar fecha.
  var hora = fecha.getHours(); //hora actual
  var minuto = fecha.getMinutes(); //minuto actual
  var segundo = fecha.getSeconds(); //segundo actual
  if (hora < 10) {
    //dos cifras para la hora
    hora = "0" + hora;
  }
  if (minuto < 10) {
    //dos cifras para el minuto
    minuto = "0" + minuto;
  }
  if (segundo < 10) {
    //dos cifras para el segundo
    segundo = "0" + segundo;
  }
  //devolver los datos:
  var mireloj = hora + " : " + minuto + " : " + segundo;
  return mireloj;
}

function actualizar() {
  //función del temporizador
  var mihora = actual(); //recoger hora actual
  var mireloj = document.getElementById("reloj"); //buscar elemento reloj
  mireloj.innerHTML = mihora;
} //incluir hora en elemento

setInterval(actualizar, 1000); //iniciar temporizador

function liquidar() {
  var hoy = new Date();
  var hora = hoy.getHours();
  //var minuto = hoy.getMinutes();
  if (hora < 10) {
    hora = "0" + hora;
  }
  //if (minuto < 10) {
  //  minuto = "0" + minuto;
  //}
  var horaExacta = hora; //+ " : " + minuto; //devolver datos
  return horaExacta;
}
function cobrar(){
	var mihora = liquidar();
	var CR = mihora * 2000;
	var MIHora = document.getElementById("precio");
	MIHora.innerHTML = CR;
} setInterval(cobrar, 1000)
