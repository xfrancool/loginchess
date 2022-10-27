const lichess = [
  {
    id: 1,
  },
];

function Template(lichess) {
  return `
    
  <iframe width=600 height=371 src="https://lichess.org/study/embed/FkCrC7RC/ZzOVXjij" frameborder=0></iframe>
      
      `;
}

document.getElementById("lichess").innerHTML = `
              
              ${lichess.map(Template).join("")}
              
            `;
