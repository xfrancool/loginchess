const videos = [
  {
    clase: "Clase 1",
    url: "https://youtu.be/-z0zsmr3GZY",
    frame: "https://www.youtube.com/embed/-z0zsmr3GZY",
  },
];

function Template(videos) {
  return `
  <div class="textcardvideos">
     <button class="accordion">${videos.clase}</button>
     <div class="panel">
     <p><a href="${videos.url}" target="_blank" class="linkclas">Ver en Youtube</a></p>
     
      
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
