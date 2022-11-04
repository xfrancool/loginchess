const data = [
  {
    clase: "Clase 10",
    tema: "",
    estudio: "https://lichess.org/TVazxmdwKBRR",
    video: "misvideos.html",
    gif: "https://www.mediafire.com/view/carsp21rq9lhd89/Clase_10.gif/file",
    frame: "https://www.youtube.com/embed/SkPZkyxDBwk",
    mes: "Noviembre",
  },
];
function Template(data) {
  return `
  <div class="textcard">

  <p class="parrafocard">
  <h3>${data.clase} | ${data.mes}</h3>
  <h4>${data.tema}</h4> 
</p>
<br>
<h3 class="cap">
Ver estudio
<a href="${data.estudio}" target="_blank"
  ><img src="../img/png.png" class="logozoom" alt=""
/></a>
</h3>


<iframe id="iframecard"
             width="475"
             height="315"
             src="${data.frame}">
             title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen
             ></iframe>


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
