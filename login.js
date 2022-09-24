function login() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("password").value;
  btn = document.getElementById("loading");

  if (user == "Sherleck" && pass == "1516") {
    btn.style.backgroundColor = "#1a9a47";
    window.location = "grupos/primero/grupo1.html";
  } else if (user == "Joshua" && pass == "1517") {
    window.location = "grupos/primero/grupo1.html";
  } else if (user == "Sergio29m" && pass == "5445") {
    window.location = "grupos/sergio/sergio.html";
  } else if (user == "EricLista" && pass == "1518") {
    window.location = "grupos/eric/eric.html";
  } else if (user == "Mateo1" && pass == "1519") {
    window.location = "grupos/mateo/mateo.html";
  } else if (user == "elimaryarg" && pass == "hola12") {
    window.location = "inicio.html";
  } else {
    alert("Por favor, ingrese usuario y contraseña corectos");
    btn.style.backgroundColor = "rgb(224, 57, 57)";
  }
}
