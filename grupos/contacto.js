const Temp = [
  {
    id: 1,
  },
];

function Template(Temp) {
  return `
  <h1
  id="tiger"
  class="animate__animated animate__pulse animate__delay-1s"
>
  Nuestras redes
</h1>
<img
  src="../img/logo1.png"
  class="imglogo"
  alt=""
  data-aos="zoom-in"
  data-aos-delay="900"
  data-aos-once="false"
/>
<br />

<article
  class="main__social animate__animated animate__pulse animate__delay-3s"
>
  <a
    href="https://academia-alfil-dama.netlify.app/"
    class="main__link"
    target="_blank"
  >
    <strong>Nuetra Web </strong>

    <img src="../imgin/web.png" class="main__icon" />
  </a>
  <a
    href="https://www.instagram.com/academia_alfil_dama/"
    class="main__link"
    target="_blank"
  >
    <strong>Instagram</strong>

    <img src="../imgin/instagram.svg" class="main__icon" />
  </a>
  <a
    href="https://www.facebook.com/profile.php?id=100085386344509"
    class="main__link"
    target="_blank"
  >
    <strong>Facebook</strong>

    <img src="../imgin/facebook.svg" class="main__icon" />
  </a>



  <a
    href="https://api.whatsapp.com/send?phone=+5493548500137&text=Hola, soy un profe quiero consultarte algo!"
    class="main__link"
    target="_blank"
  >
    <strong>Whatsapp</strong>
   

    <img src="../imgin/whatsapp2.svg" class="main__icon" />
  </a>
</article>
<br />
<br />

<h4 class="cap">
  Te dejamos un formulario para sugerencias de cambios y nuevas
  propuestas
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfU-40GdzzQqoW13P4F0n9Gcxlo3SmRPJbydDo2uQUd-TDvCg/viewform?usp=pp_url"
    target="_blank"
    ><img src="../img/form.png" class="logozoom" alt=""
  /></a>
</h4>

  
    `;
}

document.getElementById("contacto").innerHTML = `
            
            ${Temp.map(Template).join("")}
            
          `;
