const data = [
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
];

function Template(data) {
  return `
  <div class="textcard">

  <p class="parrafocard">
  <h3>${data.clase}</h3>
   <h4>${data.tema}</h4>

</p>
<br>
<h3 class="cap">
Ver estudio
<a href="${data.estudio}" target="_blank"
  ><img src="../img/png.png" class="logozoom" alt=""
/></a>
</h3>
<h3 class="cap">
Ver video
<a href="${data.video}" 
  ><img src="../img/video.png" class="logozoom" alt=""
/></a>


</h3>

<h4 class="cap">
Descargar Material
<a  href="${data.gif}" 
target="_blank" ><img src="../img/descarga1.png" class="logozoom" alt=""
/></a>

</h4>
</div>
`;
}

document.getElementById("date").innerHTML = `
        
        ${data.map(Template).join("")}
      `;
