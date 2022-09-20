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
  </p> &copy; Todos los derechos reservados
  <a href="${footer.urlsocial1}" id="website"  target="_blank"
    >Franeli</a
  >
</p>

<div class="social-links">
<a href="${footer.urlsocial2}"  target="_blank"
><i class="fab fa-instagram"></i
></a>
<a href="${footer.urlsocial3}"  target="_blank"
><i class="fab fa-facebook-f"></i
></a>
<a
href="${footer.urlsocial5}"  target="_blank"
><i class="fab fa-whatsapp" aria-hidden="true" id=""></i
></a> 
<a href="${footer.urlsocial4}"  target="_blank"
><i class="fa fa-globe" id=""></i
></a>
</div>
 
`;
}

document.getElementById("apk").innerHTML = `
        
        ${footer.map(Template).join("")}
        
      `;
