const clases = [
  {
    clase: "Clase 1",
    tema: "",
    estudio: "https://lichess.org/study/th8BnJ7w/OIJHGTVh",
    frame: "https://www.youtube.com/embed/TR-9WGyy2ic",
    gif: "https://www.mediafire.com/view/tl928qotyfdg0kg/Clase_N1_GIF.gif/file",
    mes: "",
    profe: "Rosito",
  },
  {
    clase: "Clase 2",
    tema: "",
    estudio: "https://lichess.org/study/th8BnJ7w/OIJHGTVh",
    frame: "https://www.youtube.com/embed/IgBB9MlVQE8",
    gif: "https://www.mediafire.com/view/tl928qotyfdg0kg/Clase_N1_GIF.gif/file",
    mes: "",
    profe: "Rosito",
  },
];

function Template(clases) {
  return `
 
  <button class="accordion">${clases.clase} | ${clases.profe}  ${clases.tema}</button>
  <div class="panel">
   


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
