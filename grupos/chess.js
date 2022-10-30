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
                <p>Se remienda ver estudios en el navegador</p>
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
                <h3>Mis clases
                </h3>
                <p>Todas se encuentran guardadas</p>
               <a href="clases.html" ><button class="learn-more" id="btn-more">   
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
               
               <a href="misvideos.html" ><button class="learn-more" id="btn-more">   
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
