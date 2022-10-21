const videosA = [
  {
    id: 1,
  },
];

function Template(videosA) {
  return `
  <h1 id="textfinal">Videos adicionales</h1>
  <div class="">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/cccsBeyTUPA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  
  
  <div class="">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/e57NqRHE6AY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  
  <div class="">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/GdSqPHR5rAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div class="">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/2UeYpl46ggc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
   
 
  
  <div class="">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/aOgDbm8dqsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <br />
  <br />

  
    `;
}

document.getElementById("adicionales").innerHTML = `
            
            ${videosA.map(Template).join("")}
            
          `;
