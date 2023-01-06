const clases = [
  {
    clase: "Clase 1",
    estudio: "https://lichess.org/study/TsvZgNEb",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/hmjjksx79zr6ucy/Clase1.pgn/file",
    frame: "https://www.youtube.com/embed/QwQwdhxhPw0",
    mes: "Septiembre",
  },
  {
    clase: "Clase 2",
    estudio: "https://lichess.org/study/TsvZgNEb/u3PTrDKx",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/y33wu2fwvkj54g1/CLASE_N2_GIF.gif/file",
    frame: "https://www.youtube.com/embed/NACa67nZDDc",
    mes: "Septiembre",
  },
  {
    clase: "Clase 3",
    estudio: "https://lichess.org/study/TsvZgNEb/rGZOFbia",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/phzjwob47im1c9i/Clase_-_3.gif/file",
    frame: "https://www.youtube.com/embed/8DN-m9w4A80",
    mes: "Septiembre",
  },
  {
    clase: "Clase 4",
    estudio: "https://lichess.org/study/TsvZgNEb/a2k8WdTo",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/v5m7xsc4shhqeb1/Clase_4.gif/file",
    frame: "https://www.youtube.com/embed/VvzL7j02luk",
    mes: "Septiembre",
  },
  {
    clase: "Clase 5",
    tema: "Entrenamiento",
    estudio: "https://lichess.org/training",
    video: "misvideos.html",
    gif: "#",
    frame: "https://www.youtube.com/embed/FYTuH8pMcpc",
    mes: "Septiembre",
  },
  {
    clase: "Clase 6",
    estudio: "https://lichess.org/study/TsvZgNEb/a2k8WdTo",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/80valzr9fbfqn60/Clase_6.pgn/file",
    frame: "https://www.youtube.com/embed/TTVIaZ10WPY",
    mes: "Octubre",
  },
  {
    clase: "Clase 7",
    estudio: "https://lichess.org/study/TsvZgNEb/hfLzVJXR",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/092mz65ek2pof01/Clase_7.pgn/file",
    frame: "https://www.youtube.com/embed/Y8NMFJ2m04U",
    mes: "Octubre",
  },
  {
    clase: "Clase 8",
    estudio: "https://lichess.org/study/TsvZgNEb/1J8Ws9GU",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/i6fl64o08i78rl7/Clase_8.pgn/file",
    frame: "https://www.youtube.com/embed/gX34Xctb5Bc",
    mes: "Octubre",
  },
  {
    clase: "Clase 9",
    estudio: "https://lichess.org/study/TsvZgNEb/r3wx9FCf",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/942yq6hrai2oq3u/Clase_9.pgn/file",
    frame: "https://www.youtube.com/embed/Mia9zGmxLU4",
    mes: "Octubre",
  },
  {
    clase: "Clase 10",
    estudio: "https://lichess.org/TVazxmdwKBRR",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/view/carsp21rq9lhd89/Clase_10.gif/file",
    frame: "https://www.youtube.com/embed/SkPZkyxDBwk",
    mes: "Noviembre",
  },
  {
    clase: "Clase 11",
    video: "misvideos.html",
    frame: "https://www.youtube.com/embed/9gMhf63kxsA",
    mes: "Noviembre",
  },
  {
    clase: "Clase 12",
    estudio: "https://lichess.org/study/TsvZgNEb/DF5Vbp1T",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/kqtbk9koy3gzyth/Clase_12.pgn/file",
    frame: "https://www.youtube.com/embed/EPpiQtvARuc",
    mes: "Noviembre",
  },
  {
    clase: "Clase 13",
    estudio: "https://lichess.org/study/TsvZgNEb/G14bGyXY",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/oqs6yzsko2ce6td/Clase_13.pgn/file",
    frame: "https://www.youtube.com/embed/diIr40GrRkY",
    mes: "Noviembre",
  },
  {
    clase: "Clase 14",
    estudio: "https://lichess.org/study/TsvZgNEb/tyYkfRHq",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/nymp2ha26ecgy8g/Clase_14.pgn/file",
    frame: "https://www.youtube.com/embed/U9akbPXGx_s",
    mes: "Diciembre",
  },
  {
    clase: "Clase 15",
    estudio: "https://lichess.org/study/TsvZgNEb/Ws7cQczl",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/3f0wjr8glb9kics/Clase_15.pgn/file",
    frame: "https://www.youtube.com/embed/dl049qaiMUU",
    mes: "Diciembre",
  },
  {
    clase: "Clase 16",
    estudio: "https://lichess.org/study/TsvZgNEb/SoAtXzD3",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/file/fn12xru6wdtyeah/Clase_16.pgn/file",
    frame: "https://www.youtube.com/embed/8mPSEQkznNI",
    mes: "Diciembre",
  },
  {
    clase: "Clase 17",
    video: "misvideos.html",
    frame: "https://www.youtube.com/embed/HIwUEbkYRLw",
    mes: "Diciembre",
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
