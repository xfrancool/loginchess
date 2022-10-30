const videos = [
  {
    clase: "Clase 1",
    frame: "https://www.youtube.com/embed/OksT8_CfcXw",
    mes: "Septiembre",
  },
  {
    clase: "Clase 2",
    frame: "https://www.youtube.com/embed/WJ9cC76FVEk",
    mes: "Septiembre",
  },
  {
    clase: "Clase 3",
    frame: "https://www.youtube.com/embed/Sa0pmRgqs-k",
    mes: "Septiembre",
  },
  {
    clase: "Clase 4",
    frame: "https://www.youtube.com/embed/njUhEecF_Gc",
    mes: "Septiembre",
  },
  {
    clase: "Clase 5",
    frame: "https://www.youtube.com/embed/E3wEBTgsusA",
    mes: "Octubre",
  },
  {
    clase: "Clase 6 (Parte 1)",
    frame: "https://www.youtube.com/embed/3NMbU3_bsoI",
    mes: "Octubre",
  },
  {
    clase: "Clase 6 (Parte 2)",
    frame: "https://www.youtube.com/embed/gomy7cFpOcw",
    mes: "Octubre",
  },
  {
    clase: "Clase 7",
    frame: "https://www.youtube.com/embed/UdiFrg73GeA",
    mes: "Octubre",
  },
  {
    clase: "Clase 8",
    frame: "https://www.youtube.com/embed/J5AF3_YL32Y",
    mes: "Octubre",
  },
];

function Template(videos) {
  return `
  <div class="textcardvideos">
     <button class="accordion">${videos.clase} | ${videos.mes}</button>
     <div class="panel">
     
     
    
      <iframe id="iframeacordion"
             width="475"
             height="315"
             src="${videos.frame}"
             title="YouTube video player"
             frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen
             ></iframe></p>
      
     
     </div>
     
    </div>
  
  
    `;
}
/*********Acordion********** */
document.getElementById("videos").innerHTML = `
            
            ${videos.map(Template).join("")}
          `;

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
