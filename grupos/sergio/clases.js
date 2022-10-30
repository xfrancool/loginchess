const clases = [
  {
    clase: "Clase 1",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb",
    video: "video.html#clase1",
    gif: "https://www.mediafire.com/file/hmjjksx79zr6ucy/Clase1.pgn/file",
  },
  {
    clase: "Clase 2",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/u3PTrDKx",
    video: "video.html#clase2",
    gif: "https://www.mediafire.com/file/y33wu2fwvkj54g1/CLASE_N2_GIF.gif/file",
  },
  {
    clase: "Clase 3",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/rGZOFbia",
    video: "video.html#clase3",
    gif: "https://www.mediafire.com/file/phzjwob47im1c9i/Clase_-_3.gif/file",
  },
  {
    clase: "Clase 4",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/a2k8WdTo",
    video: "video.html#clase4",
    gif: "https://www.mediafire.com/file/v5m7xsc4shhqeb1/Clase_4.gif/file",
  },
  {
    clase: "Clase 5",
    tema: "Entrenamiento",
    estudio: "https://lichess.org/training",
    video: "video.html#clase5",
    gif: "#",
  },
  {
    clase: "Clase 6",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/a2k8WdTo",
    video: "video.html#clase6",
    gif: "https://www.mediafire.com/file/80valzr9fbfqn60/Clase_6.pgn/file",
  },
  {
    clase: "Clase 7",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/hfLzVJXR",
    video: "video.html#clase7",
    gif: "https://www.mediafire.com/file/092mz65ek2pof01/Clase_7.pgn/file",
  },
  {
    clase: "Clase 8",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/1J8Ws9GU",
    video: "video.html#clase8",
    gif: "https://www.mediafire.com/file/i6fl64o08i78rl7/Clase_8.pgn/file",
  },
  {
    clase: "Clase 9",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/r3wx9FCf",
    video: "video.html#clase9",
    gif: "https://www.mediafire.com/file/942yq6hrai2oq3u/Clase_9.pgn/file",
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
