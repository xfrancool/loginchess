function login() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("password").value;

  if (user == "Sherleck" && pass == "1516") {
    window.location = "grupos/primero/grupo1.html";
  } else if (user == "Joshua" && pass == "1517") {
    window.location = "grupos/primero/grupo1.html";
  } else if (user == "Sergio29m" && pass == "5445") {
    window.location = "grupos/sergio/sergio.html";
  } else if (user == "EricLista" && pass == "1518") {
    window.location = "grupos/eric/eric.html";
  } else if (user == "elimaryarg" && pass == "hola12") {
    window.location = "inicio.html";
  } else {
    alert("Por favor, ingrese usuario y contraseña corectos");
  }
}
