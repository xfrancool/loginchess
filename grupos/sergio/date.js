const data = [
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
function Template(data) {
  return `
  <div class="textcard">

  <p class="parrafocard">
  <h3>${data.clase} | ${data.mes}</h3>
 


<h3 class="cap">
Ver estudio
<a href="${data.estudio}" target="_blank"
  ><img src="../img/png.png" class="logozoom" alt=""
/></a>
<h3></h3>


         

           <iframe id="iframecard"
           
           height="230"
           src="${data.frame}"
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen
           >
           </iframe>




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
