const std = [
  {
    id: 9,
    url: "https://lichess.org/training",
    title: "Ejercicios diarios",
  },
  {
    id: 1,
    url: "https://lichess.org/study/et8pXJv9",
    title: "Juego en 3 jaques",
  },
  {
    id: 2,
    url: "https://lichess.org/study/nQIobiZL",
    title: "Táctica",
  },
  {
    id: 3,
    url: "https://lichess.org/study/Qn7Je4hg",
    title: "Ejercicios de Mate",
  },
  {
    id: 4,
    url: "https://lichess.org/study/pc2RBrqf",
    title: "Finales de Peones",
  },
  {
    id: 5,
    url: "https://lichess.org/study/bLueKFH4",
    title: "Estructura de Peones",
  },
  {
    id: 6,
    url: "https://lichess.org/study/FNBYBKDO",
    title: "Sacrificios de Dama",
  },
  {
    id: 7,
    url: "https://lichess.org/study/EQRqDED6",
    title: "Atacando a la dama",
  },
  {
    id: 8,
    url: "https://lichess.org/study/pXgJKnQR",
    title: "Ejercicios de dama",
  },
];

function Template(std) {
  return `
 



        
    <div class="card animate__animated animate__pulse animate__delay-4s" id=""> <div class="textcard">

    
  
    <p class="parrafocard">
        <h3>${std.title}</h3>
      

       

   <a href="${std.url}" target="_blank"><button class="learn-more" id="btn-more">   
   <span class="circle" aria-hidden="true">
   <span class="icon arrow"></span>
   </span>
   <span class="button-text">Click aquí</span> 
   </button></a>

    </p>
  </div></div>
    
    
      `;
}

document.getElementById("std").innerHTML = `
              
              ${std.map(Template).join("")}
              
            `;
