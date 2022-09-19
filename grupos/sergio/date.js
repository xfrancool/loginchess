const data = [
  {
    clase: "Clase1",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb",
    video: "video.html#clase1",
    gif: "https://www.mediafire.com/file/hmjjksx79zr6ucy/Clase1.pgn/file",
  },
  {
    clase: "Clase2",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/u3PTrDKx",
    video: "video.html#clase2",
    gif: "https://www.mediafire.com/view/y33wu2fwvkj54g1/CLASE_N2_GIF.gif/file",
  },
  {
    clase: "Clase3",
    tema: "",
    estudio: "https://lichess.org/study/TsvZgNEb/rGZOFbia",
    video: "video.html#clase3",
    gif: "https://www.mediafire.com/view/phzjwob47im1c9i/Clase_-_3.gif/file",
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
Descargar PNG
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
