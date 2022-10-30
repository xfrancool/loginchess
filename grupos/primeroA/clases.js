const clases = [
  {
    clase: "Clase 1",
    tema: "Akhavan Rad, A. - Sorokin, Maxim (Dubai 2001)",
    estudio: "https://lichess.org/study/th8BnJ7w/OIJHGTVh",
    video: "video.html#clase1",
    gif: "https://www.mediafire.com/view/tl928qotyfdg0kg/Clase_N1_GIF.gif/file",
  },
  {
    clase: "Clase 2",
    tema: "Hungaski - Mahia 2003",
    estudio: "https://lichess.org/study/th8BnJ7w/qnKfdyiB",
    video: "video.html#clase2",
    gif: "https://www.mediafire.com/view/3ch6rl8p56t8s5v/Clase_N2_GIF.gif/file",
  },
  {
    clase: "Clase 3",
    tema: "Apertura Inglesa",
    estudio: "https://lichess.org/study/th8BnJ7w/MR9973hh",
    video: "video.html#clase3",
    gif: "https://www.mediafire.com/view/qxf8dvzugc03g04/Clase_3.gif/file",
  },
  {
    clase: "Clase 4",
    tema: "Lasker - Steinitz (1884)",
    estudio: "https://lichess.org/study/th8BnJ7w/OIJHGTVh",
    video: "video.html#clase4",
    gif: "https://www.mediafire.com/view/qywmlqjfq75vmxv/Clase_4.gif/file",
  },
  {
    clase: "Clase 5",
    tema: "Inglesa",
    estudio: "https://lichess.org/study/B0JzCPKI/4ZtCfyoM",
    video: "video.html#clase5",
    gif: "https://www.mediafire.com/file/xvcpes4ragr1iyh/Clase_5.pgn/file",
  },
  {
    clase: "Clase 6 (Parte 1)",
    tema: "Semi-eslava",
    estudio: "https://lichess.org/study/4enu7ISA/h2RDmVSL",
    video: "video.html#clase6",
    gif: "https://www.mediafire.com/file/cakqzgnsone9c92/Clase_6.pgn/file",
  },
  {
    clase: "Clase 6 (Parte 2)",
    tema: "Casillas Reales",
    estudio: "https://lichess.org/study/2cjSJsaw",
    video: "video.html#clase6",
    gif: "https://www.mediafire.com/file/ycif2kph4mf8niq/casillas_reales.pgn/file",
  },
  {
    clase: "Clase 7",
    tema: "",
    estudio: "https://lichess.org/study/th8BnJ7w/MR9973hh",
    video: "video.html#clase7",
    gif: "https://www.mediafire.com/file/7zac68f5matpkew/Clase_7.pgn/file",
  },
  {
    clase: "Clase 8",
    tema: "Apertura Inglesa",
    estudio: "https://lichess.org/study/th8BnJ7w",
    video: "video.html#clase8",
    gif: "https://www.mediafire.com/file/f8wug1rdw22f6x8/Clase_8.pgn/file",
  },
];

function Template(clases) {
  return `
 
  <button class="accordion">${clases.clase}</button>
  <div class="panel">
    <p>${clases.tema}</p>
    <p><a href="${clases.estudio}" target="_blank" class="linkclas">Ver estudio</a></p>
    <p><a href="${clases.video}" target="_blank" class="linkclas">Ver video</a></p>
    <p><a href="${clases.gif}" target="_blank" class="linkclas">Descargar</a></p>
    
   
  </div>



  `;
}
/*********Acordion********** */
document.getElementById("clases").innerHTML = `
          
          ${clases.map(Template).join("")}
        `;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
