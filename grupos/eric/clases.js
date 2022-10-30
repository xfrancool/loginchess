const clases = [
  {
    clase: "Clase 1",
    tema: "Jugar contra las piezas enemigas",
    estudio: "https://lichess.org/bITA1wy4THVj",
    video: "video.html#clase1",
    gif: "https://www.mediafire.com/view/d4zm1mfux2nec8j/Clase1.gif/file",
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
