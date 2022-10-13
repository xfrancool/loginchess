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
<div class="contact__container">
<h1>Escríbenos...</h1>
<form
  action="https://formsubmit.co/a3bd8126aa78cf622a0e9499274b531c"
  method="POST"
  class="contact__form"
>
  <input
    type="text"
    placeholder="Nombre"
    class="contact__input"
    name="name"
    required
  />
  <!-- <input
    type="mail"
    placeholder="Email"
    class="contact__input"
    name="email"
    required
  /> -->
  <textarea
    id="mms"
    name="message"
    id=""
    cols="0"
    rows="10"
    class="contact__input"
    placeholder="Escribe tu mensaje de sugerencias,mejoras o inconvenientes..."
  ></textarea>

  <input type="submit" value="Enviar" class="contact__button sub" />
</form>
<br />

<iframe
  class="frame"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217954.93389075092!2d-64.3344309779378!3d-31.399083972440742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2sC%C3%B3rdoba%2C%20Cordoba%2C%20Argentina!5e0!3m2!1sen!2sin!4v1643841777104!5m2!1sen!2sin"
  width="300"
  height="180"
  style="border: 0"
  allowfullscreen=""
  loading="lazy"
></iframe>
</div>
</h4>

  
    `;
}

document.getElementById("contacto").innerHTML = `
            
            ${Temp.map(Template).join("")}
            
          `;
