const std = [
  {
    id: 1,
  },
];

function Template(std) {
  return `
    <h1 id="textfinal"  class="animate__animated animate__flipInX animate__delay-1s">Estudiar</h1>
        
    <div class="card animate__animated animate__pulse animate__delay-4s" id=""> <div class="textcard">

    
    
    <p class="parrafocard">
        <h3>Juego en 3 jaques</h3>
       <a href="https://lichess.org/study/et8pXJv9" target="_blank">Click aqui</a>
    </p>
  </div>
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
        <h3>Finales de Peones</h3>
       <a href="https://lichess.org/study/pc2RBrqf" target="_blank">Click aqui</a>
    </p>
  </div>
<div class="textcard">
    <p class="parrafocard">
    <h3>Estructura de Peones</h3>
    <a href="https://lichess.org/study/bLueKFH4" target="_blank">Click aqui</a>
    </p>
  </div>
<div class="textcard">
    <p class="parrafocard">
    <h3>Sacrificios de Dama</h3>
    <a href="https://lichess.org/study/FNBYBKDO" target="_blank">Click aqui</a>
    </p>
  </div>
<div class="textcard">
    <p class="parrafocard">
    <h3>Atacando a la dama</h3>
    <a href="https://lichess.org/study/EQRqDED6" target="_blank">Click aqui</a>
    </p>
  </div>
<div class="textcard">
    <p class="parrafocard">
    <h3>Ejercicios de dama</h3>
    <a href="https://lichess.org/study/pXgJKnQR" target="_blank">Click aqui</a>
    </p>
  </div>
  
 

</div>
    
    
      `;
}

document.getElementById("std").innerHTML = `
              
              ${std.map(Template).join("")}
              
            `;
