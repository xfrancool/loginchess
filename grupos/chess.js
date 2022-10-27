const chess = [
  {
    id: 1,
  },
];

function Template(chess) {
  return `
  
  <div class="textcard">
            <p class="parrafocard">
                <h3>Sección de estudio
                </h3>
               <a href="estudiar.html" ><button class="learn-more" id="btn-more">   
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Click aquí</span> 
                </button></a>
            </p>
          </div>
          <div class="textcard">
            <p class="parrafocard">
                <h3>Mis videos
                </h3>
               <a href="video.html" ><button class="learn-more" id="btn-more">   
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Click aquí</span> 
                </button></a>
            </p>
          </div>
    
    `;
}

document.getElementById("chess").innerHTML = `
            
            ${chess.map(Template).join("")}
            
          `;
