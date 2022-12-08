//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const submenu = document.querySelectorAll(".dropdown-arrow");
for (const buttons of submenu) {
  buttons.addEventListener("click", function (event) {
    //...
  });
}

// SOLO PARA ELIZABETH

const date = [
  {
    Nombre: "Sergio",
    Horario: "Viernes (20:30hs.)",
    Categoria: "PREMIUM",
    Meet: "https://meet.google.com/imj-xaxi-gdy",
  },
  {
    Nombre: "Eric",
    Horario: "Viernes   (21hs.)",
    Categoria: "PREMIUM",
    Meet: "https://meet.google.com/fxm-vwpw-xsr",
  },

  {
    Nombre: "Fede",
    Horario: "Miércoles (18:30.)",
    Categoria: "PREMIUM",
    Meet: "https://meet.google.com/fza-ivxy-udc?authuser=0&hl=es_419",
  },
  {
    Nombre: "Jero & Fausti",
    Horario: "Viernes (16:30 hs.)",
    Categoria: "",
    Meet: "https://meet.google.com/cnu-qucx-bnr",
  },
  {
    Nombre: "Ciro",
    Horario: "Martes (20hs.)",
    Categoria: "",
    Meet: "https://meet.google.com/fza-ivxy-udc?authuser=0&hl=es_419",
  },
  {
    Nombre: "Valentina",
    Horario: "Jueves (14hs.)",
    Categoria: "",
    Meet: "https://meet.google.com/dhr-gocj-cby",
  },
  {
    Nombre: "Mateo",
    Horario: "Jueves (19hs.)",
    Categoria: "",
    Meet: ".",
  },
];

function Template(date) {
  return `
  <div class="" id="">
            <h2>
              ${date.Nombre} 
              <a href="${date.Meet}" target="_blank"
                ><img src="img/meet.png" class="logozoom" alt=""
              /></a>
            </h2>

            <p class="horarios">${date.Horario} ${date.Categoria} <br /></p>
          </div>`;
}

document.getElementById("date").innerHTML = `
      
      ${date.map(Template).join("")}
      
    `;

/***************************** */
