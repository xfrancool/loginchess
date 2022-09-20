const footer = [
  {
    id: 1,
    urlsocial1: "https://portafolio-jobs.netlify.app/",
    urlsocial2: "https://www.instagram.com/academia_alfil_dama/",
    urlsocial3: "https://www.facebook.com/profile.php?id=100085386344509",
    urlsocial4: "https://academia-alfil-dama.netlify.app/",
    urlsocial5:
      "https://api.whatsapp.com/send?phone=+5493548500137&text=Hola, queria consultarte sobre un inconveniente con la página..",
  },
];

function Template(footer) {
  return `
  &copy; Todos los derechos reservados
  <a href="${footer.urlsocial1}" id="website"
    >Franeli</a
  >
</p>

<div class="social-links">
  <a href="${footer.urlsocial2}"
    ><i class="fab fa-instagram"></i
  ></a>
  <a href="${footer.urlsocial3}"
    ><i class="fab fa-facebook-f"></i
  ></a>
  <a href="${footer.urlsocial4}"
    ><i class="fa fa-globe"></i
  ></a>
  <a
    href="${footer.urlsocial5}"
    ><i class="fab fa-whatsapp" aria-hidden="true"></i
  ></a> 
</div>
 
`;
}

document.getElementById("apk").innerHTML = `
        
        ${footer.map(Template).join("")}
        
      `;
