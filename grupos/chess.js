const chess = [
  {
    id: 1,
  },
];

function Template(chess) {
  return `
  
  <div class="textcard">
      <p class="parrafocard">
          <h3>Táctica</h3>
         <a href="https://lichess.org/study/nQIobiZL" target="_blank">Click aqui</a>
      </p>
    </div>
  <div class="textcard">
      <p class="parrafocard">
          <h3>Ejercicios de Mate</h3>
         <a href="https://lichess.org/study/Qn7Je4hg" target="_blank">Click aqui</a>
      </p>
      
    </div>
  <div class="textcard">
      <p class="parrafocard">

          <h3>Ejercicios diarios</h3>
          <p>Ser constante, pensar antes mover son las claves para avanzar</p>
         <a href="https://lichess.org/training/" target="_blank">Click aqui</a>
      </p>

    </div>
    
    `;
}

document.getElementById("chess").innerHTML = `
            
            ${chess.map(Template).join("")}
            
          `;
