const Temp = [
  {
    id: 1,
  },
];

function Template(Temp) {
  return `<img
  src="../img/logo1.png"
  class="imglogo"
  alt=""
  data-aos="zoom-in"
  data-aos-delay="900"
  data-aos-once="false"
/>
<br />
<br />
<br />

<div class="card animate__animated animate__pulse animate__delay-1s">
  <div class="textcard">
    <p class="parrafocard"></p>
    <h3>¿Quiénes somos?</h3>

    Somos un equipo de profesores que enseña a nivel inicial y
    profesional, con experiencia tanto jugando como enseñando en
    diferentes partes del país y del mundo. Nuestro objetivo es
    brindarte las herramientas necesarias para que puedas iniciarte en
    este deporte o mejorar tu nivel y cumplir las metas que te
    propongas.
    <p></p>
  </div>
</div>
<div class="card animate__animated animate__pulse animate__delay-1s">
  <div class="textcard">
    <div class="slide">
      <div class="slide-inner">
        <input
          class="slide-open"
          type="radio"
          id="slide-1"
          name="slide"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div class="slide-item">
          <br />
          <h2>Bertea Gustavo</h2>
          <br />
          <p><strong>ELO Lichess 1922</strong></p>
          <br />
          <img src="../img/profes/prof1.jpeg" class="imgprof" />
        </div>
        <input
          class="slide-open"
          type="radio"
          id="slide-2"
          name="slide"
          aria-hidden="true"
          hidden=""
        />
        <div class="slide-item">
          <br />
          <h2>López Roberto</h2>
          <br />
          <p><strong>ELO Lichess 1960</strong></p>
          <br />
          <img src="../img/profes/prof2.jpeg" class="imgprof" />
        </div>
        <input
          class="slide-open"
          type="radio"
          id="slide-3"
          name="slide"
          aria-hidden="true"
          hidden=""
        />
        <div class="slide-item">
          <br />
          <h2>Sotelo Noé</h2>
          <br />
          <p><strong>ELO FIDE 2081</strong></p>
          <br />
          <img src="../img/profes/prof3.jpeg" class="imgprof" />
        </div>
        <input
          class="slide-open"
          type="radio"
          id="slide-4"
          name="slide"
          aria-hidden="true"
          hidden=""
        />
        <div class="slide-item">
          <br />
          <h1>Acosta Franco</h1>
          <p><strong>ELO FIDE 1956</strong></p>
          <br />
          <img src="../img/profes/prof4.jpeg" class="imgprof" />
        </div>
        <input
          class="slide-open"
          type="radio"
          id="slide-5"
          name="slide"
          aria-hidden="true"
          hidden=""
        />
        <div class="slide-item">
          <br />
          <h2>Argento Mariel</h2>
          <br />
          <p><strong>ELO Lichess 2305</strong></p>
          <br />
          <img src="../img/profes/prof5.jpg" class="imgprof" />
        </div>

        <label for="slide-5" class="slide-control prev control-1"
          >‹</label
        >
        <label for="slide-2" class="slide-control next control-1"
          >›</label
        >
        <label for="slide-1" class="slide-control prev control-2"
          >‹</label
        >
        <label for="slide-3" class="slide-control next control-2"
          >›</label
        >
        <label for="slide-2" class="slide-control prev control-3"
          >‹</label
        >
        <label for="slide-4" class="slide-control next control-3"
          >›</label
        >
        <label for="slide-3" class="slide-control prev control-4"
          >‹</label
        >
        <label for="slide-5" class="slide-control next control-4"
          >›</label
        >
        <label for="slide-4" class="slide-control prev control-5"
          >‹</label
        >
        <label for="slide-1" class="slide-control next control-5"
          >›</label
        >

        <ol class="slide-indicador">
          <li>
            <label for="slide-1" class="slide-circulo">•</label>
          </li>
          <li>
            <label for="slide-2" class="slide-circulo">•</label>
          </li>
          <li>
            <label for="slide-3" class="slide-circulo">•</label>
          </li>
          <li>
            <label for="slide-4" class="slide-circulo">•</label>
          </li>
          <li>
            <label for="slide-5" class="slide-circulo">•</label>
          </li>
        </ol>
      </div>
    </div>
  </div>
  </div>

  <div class="card animate__animated animate__pulse animate__delay-1s">
    <div class="textcard">
      <p class="parrafocard"></p>
      <h3>Modalidades</h3>

      Trabajamos tanto virtual como presencial, eso depende de cada
      profe!
    </div>
  </div>

  
  <div class="card animate__animated animate__pulse animate__delay-1s">
  
    <div class="textcard">
      <p class="parrafocard"></p>
      <h3>¿Cuál es nuestra misión?</h3>

      Difundir gracias a nuestra enseñanza este deporte hermoso y
      preparar nuevas generaciones con buenas bases teorica y práctica.
    </div>
  </div>


</div>
    
      `;
}

document.getElementById("nosotros").innerHTML = `
              
              ${Temp.map(Template).join("")}
              
            `;
