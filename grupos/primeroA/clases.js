const clases = [
  {
    clase: "Clase 1",
    tema: "Akhavan Rad, A. - Sorokin, Maxim (Dubai 2001)",
    estudio: "https://lichess.org/study/th8BnJ7w/OIJHGTVh",
    frame: "https://www.youtube.com/embed/OksT8_CfcXw",
    gif: "https://www.mediafire.com/view/tl928qotyfdg0kg/Clase_N1_GIF.gif/file",
    mes: "Septiembre",
  },
  {
    clase: "Clase 2",
    tema: "Hungaski - Mahia 2003",
    estudio: "https://lichess.org/study/th8BnJ7w/qnKfdyiB",
    frame: "https://www.youtube.com/embed/WJ9cC76FVEk",
    gif: "https://www.mediafire.com/view/3ch6rl8p56t8s5v/Clase_N2_GIF.gif/file",
    mes: "Septiembre",
  },
  {
    clase: "Clase 3",
    tema: "Apertura Inglesa",
    estudio: "https://lichess.org/study/th8BnJ7w/MR9973hh",
    frame: "https://www.youtube.com/embed/Sa0pmRgqs-k",
    gif: "https://www.mediafire.com/view/qxf8dvzugc03g04/Clase_3.gif/file",
    mes: "Septiembre",
  },
  {
    clase: "Clase 4",
    tema: "Lasker - Steinitz (1884)",
    estudio: "https://lichess.org/study/th8BnJ7w/OIJHGTVh",
    frame: "https://www.youtube.com/embed/njUhEecF_Gc",
    gif: "https://www.mediafire.com/view/qywmlqjfq75vmxv/Clase_4.gif/file",
    mes: "Septiembre",
  },
  {
    clase: "Clase 5",
    tema: "Inglesa",
    estudio: "https://lichess.org/study/B0JzCPKI/4ZtCfyoM",
    frame: "https://www.youtube.com/embed/E3wEBTgsusA",
    gif: "https://www.mediafire.com/file/xvcpes4ragr1iyh/Clase_5.pgn/file",
    mes: "Octubre",
  },
  {
    clase: "Clase 6 (Parte 1)",
    tema: "Semi-eslava",
    estudio: "https://lichess.org/study/4enu7ISA/h2RDmVSL",
    frame: "https://www.youtube.com/embed/3NMbU3_bsoI",
    gif: "https://www.mediafire.com/file/cakqzgnsone9c92/Clase_6.pgn/file",
    mes: "Octubre",
  },
  {
    clase: "Clase 6 (Parte 2)",
    tema: "Casillas Reales",
    estudio: "https://lichess.org/study/2cjSJsaw",
    frame: "https://www.youtube.com/embed/gomy7cFpOcw",
    gif: "https://www.mediafire.com/file/ycif2kph4mf8niq/casillas_reales.pgn/file",
    mes: "Octubre",
  },
  {
    clase: "Clase 7",
    tema: "",
    estudio: "https://lichess.org/study/th8BnJ7w/MR9973hh",
    frame: "https://www.youtube.com/embed/UdiFrg73GeA",
    gif: "https://www.mediafire.com/file/7zac68f5matpkew/Clase_7.pgn/file",
    mes: "Octubre",
  },
  {
    clase: "Clase 8",
    tema: "Apertura Inglesa",
    estudio: "https://lichess.org/study/th8BnJ7w",
    frame: "https://www.youtube.com/embed/J5AF3_YL32Y",
    gif: "https://www.mediafire.com/file/f8wug1rdw22f6x8/Clase_8.pgn/file",
    mes: "Octubre",
  },
];

function Template(clases) {
  return `
 
  <button class="accordion">${clases.clase}</button>
  <div class="panel">
    <p>${clases.tema} | ${clases.mes}</p>
    <p><a href="${clases.estudio}" target="_blank" class="linkclas">Ver estudio</a></p>

    <p><a href="${clases.gif}" target="_blank" class="linkclas">Descargar material</a></p>
    <p>
    <iframe id="iframeacordion"
           width="475"
           height="315"
           src="${clases.frame}"
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen
           ></iframe></p>
    
   
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
