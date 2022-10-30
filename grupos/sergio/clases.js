const clases = [
  {
    clase: "Clase 1",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb",
    video: "video.html#clase1",
    gif: "https://www.mediafire.com/file/hmjjksx79zr6ucy/Clase1.pgn/file",
    frame: "https://www.youtube.com/embed/QwQwdhxhPw0",
    mes: "Septiembre",
  },
  {
    clase: "Clase 2",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/u3PTrDKx",
    video: "video.html#clase2",
    gif: "https://www.mediafire.com/file/y33wu2fwvkj54g1/CLASE_N2_GIF.gif/file",
    frame: "https://www.youtube.com/embed/NACa67nZDDc",
    mes: "Septiembre",
  },
  {
    clase: "Clase 3",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/rGZOFbia",
    video: "video.html#clase3",
    gif: "https://www.mediafire.com/file/phzjwob47im1c9i/Clase_-_3.gif/file",
    frame: "https://www.youtube.com/embed/8DN-m9w4A80",
    mes: "Septiembre",
  },
  {
    clase: "Clase 4",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/a2k8WdTo",
    video: "video.html#clase4",
    gif: "https://www.mediafire.com/file/v5m7xsc4shhqeb1/Clase_4.gif/file",
    frame: "https://www.youtube.com/embed/VvzL7j02luk",
    mes: "Septiembre",
  },
  {
    clase: "Clase 5",
    tema: "Entrenamiento",
    estudio: "https://lichess.org/training",
    video: "video.html#clase5",
    gif: "#",
    frame: "https://www.youtube.com/embed/FYTuH8pMcpc",
    mes: "Septiembre",
  },
  {
    clase: "Clase 6",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/a2k8WdTo",
    video: "video.html#clase6",
    gif: "https://www.mediafire.com/file/80valzr9fbfqn60/Clase_6.pgn/file",
    frame: "https://www.youtube.com/embed/TTVIaZ10WPY",
    mes: "Octubre",
  },
  {
    clase: "Clase 7",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/hfLzVJXR",
    video: "video.html#clase7",
    gif: "https://www.mediafire.com/file/092mz65ek2pof01/Clase_7.pgn/file",
    frame: "https://www.youtube.com/embed/Y8NMFJ2m04U",
    mes: "Octubre",
  },
  {
    clase: "Clase 8",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/1J8Ws9GU",
    video: "video.html#clase8",
    gif: "https://www.mediafire.com/file/i6fl64o08i78rl7/Clase_8.pgn/file",
    frame: "https://www.youtube.com/embed/gX34Xctb5Bc",
    mes: "Octubre",
  },
  {
    clase: "Clase 9",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/r3wx9FCf",
    video: "video.html#clase9",
    gif: "https://www.mediafire.com/file/942yq6hrai2oq3u/Clase_9.pgn/file",
    frame: "https://www.youtube.com/embed/Mia9zGmxLU4",
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
