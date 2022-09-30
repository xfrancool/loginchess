const navT = [
  {
    id: 1,
  },
];

function Template(navT) {
  return `
  <nav id="menu">
  <input
    type="checkbox"
    id="responsive-menu"
    onclick="updatemenu()"
  /><label></label>
  <ul>
    
    <li>
      <a class="dropdown-arrow" href="grupo1.html">Inicio</a>
      <ul class="sub-menus">
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </li>

    <li>
      <a class="dropdown-arrow" href="#">Material de estudio</a>
      <ul class="sub-menus">
        <li><a href="video.html">Videos</a></li>
        <li><a href="conceptos.html">Conceptos iniciales</a></li>
        <li><a href="juegos.html">Juegos Iniciales</a></li>
        <li><a href="finales.html">Juegos de finales</a></li>
      </ul>
    </li>
    <li><a href="nosotros.html">Acerca de nosotros</a></li>
    <li><a href="contacto.html">Contacto</a></li>
  </ul>
</nav> 
  `;
}

document.getElementById("navT").innerHTML = `
          
          ${navT.map(Template).join("")}
          
        `;
