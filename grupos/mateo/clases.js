const clases = [
  {
    clase: "Clase 1",
    tema: "",
    estudio: "",
    video: "",
    gif: "",
    frame: "",
    mes: "",
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
