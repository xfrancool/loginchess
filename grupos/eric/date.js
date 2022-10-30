const data = [
  {
    clase: "Clase 1",
    tema: "Jugar contra las piezas enemigas",
    estudio: "https://lichess.org/bITA1wy4THVj",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/view/d4zm1mfux2nec8j/Clase1.gif/file",
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
