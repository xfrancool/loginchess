const videosA = [
  {
    id: 1,
    iframe: "https://www.youtube.com/embed/cccsBeyTUPA",
  },
  {
    id: 2,
    iframe: "https://www.youtube.com/embed/e57NqRHE6AY",
  },
  {
    id: 3,
    iframe: "https://www.youtube.com/embed/GdSqPHR5rAo",
  },
  {
    id: 4,
    iframe: "https://www.youtube.com/embed/2UeYpl46ggc",
  },
  {
    id: 5,
    iframe: "https://www.youtube.com/embed/aOgDbm8dqsU",
  },
];

function Template(videosA) {
  return `
 
  <div class="">
  <iframe width="560" height="315" src="${videosA.iframe}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

    `;
}

document.getElementById("adicionales").innerHTML = `
            
            ${videosA.map(Template).join("")}
            
          `;
