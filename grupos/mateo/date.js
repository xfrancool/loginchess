const data = [
  {
    clase: "Clase1",
    tema: "",
    estudio: "",
    video: "video.html#clase1",
    gif: "",
  },
  {
    clase: "Clase2",
    tema: "",
    estudio: "",
    video: "video.html#clase2",
    gif: "",
  },
  {
    clase: "Clase3",
    tema: "",
    estudio: "",
    video: "video.html#clase3",
    gif: "",
  },
  {
    clase: "Clase4",
    tema: "",
    estudio: "",
    video: "video.html#clase4",
    gif: "",
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
Descargar GIF
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
