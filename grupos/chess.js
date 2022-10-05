const chess = [
  {
    id: 1,
  },
];

function Template(chess) {
  return `
  
  <div class="textcard">
      <p class="parrafocard">
          <h3>Ejercicios de Mate</h3>
         <a href="https://lichess.org/study/Qn7Je4hg" target="_blank">Click aqui</a>
      </p>
    </div>
    
    `;
}

document.getElementById("chess").innerHTML = `
            
            ${chess.map(Template).join("")}
            
          `;
