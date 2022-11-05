const buy = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    link: "https://mpago.la/2j8ChUg",
    title: "Apertura Inglesa",
    text: "Con sus materiales de estudios más ejercicios complementarios",
  },
];

function Template(buy) {
  return `
  <div class="card animate__animated animate__pulse animate__delay-4s">
  <div class="textcard">
    <img
      class="imgshop"
      src="${buy.img}"
    />

    <br>
    <br>
    <button class ="btn-buy"> <a href="${buy.link}">Comprar</a> </button>
    <br>
    <br>


    <p class="parrafocard">
     <h3>${buy.title}</h3>
      ${buy.text}
    </p>

  </div>
</div>
    `;
}

document.getElementById("buy").innerHTML = `
            
            ${buy.map(Template).join("")}
            
          `;
