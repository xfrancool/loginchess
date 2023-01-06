const clases = [
  {
    clase: "Clase 1",
    tema: "Finales",
    estudio: "https://lichess.org/study/m4Z3Ol1H",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/lve9apx9jsa821a/Clase_1.pgn/file",
    frame: "https://www.youtube.com/embed/Xe9jeovppAs",
    mes: "Diciembre",
  },
  {
    clase: "Clase 2",
    tema: "Finales",
    estudio: "https://lichess.org/study/m4Z3Ol1H",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/adyjf03t87xtss9/PGN_Diciembre.pgn/file",
    frame: "https://www.youtube.com/embed/ULkzCTkIsbM",
    mes: "Diciembre",
  },
  {
    clase: "Clase 3",
    tema: "Finales",
    estudio: "https://lichess.org/study/m4Z3Ol1H",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/adyjf03t87xtss9/PGN_Diciembre.pgn/file",
    frame: "https://www.youtube.com/embed/bZUPCCDtmws",
    mes: "Diciembre",
  },
  {
    clase: "Clase 4",
    tema: "Finales",
    estudio: "https://lichess.org/study/m4Z3Ol1H",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/adyjf03t87xtss9/PGN_Diciembre.pgn/file",
    frame: "https://www.youtube.com/embed/r3YL2dayz28",
    mes: "Diciembre",
  },
];

function Template(clases) {
  return `
 
  <button class="accordion">${clases.clase} | ${clases.tema}</button>
  <div class="panel">
    <p>${clases.mes}</p>
    <p><a href="${clases.estudio}" target="_blank" class="linkclas">Ver estudio</a></p>

    <p><a href="${clases.gif}" target="_blank" class="linkclas">Descargar material</a></p>
    <p>
    <iframe id="iframeacordion"
           width="475"
           height="315"
           src="https://www.youtube.com/embed/-z0zsmr3GZY"
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
