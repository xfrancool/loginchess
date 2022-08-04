function login() {
  var user, pass;

  user = document.getElementById("usuario").value;
  pass = document.getElementById("password").value;

  if (user == "elimaryarg" && pass == "hola12") {
    window.location = "inicio.html";
  } else alert("Por favor, ingrese usuario y contraseña corectos");
}
