const navT = [
  {
    id: 1,
  },
];

function Template(navT) {
  const name = "grupoA";
  return `
  <nav id="menu">
  <input
    type="checkbox"
    id="responsive-menu"
    onclick="updatemenu()"
  /><label></label>
  <ul>
    
    <li>
    <a  href="${name}.html">Inicio</a>
    <li>
      <a class="dropdown-arrow" href="#">Material de estudio</a>
      <ul class="sub-menus">
        <li><a href="video.html">Videos Adicionales</a></li>
        <li><a href="conceptos.html">Conceptos iniciales</a></li>
        <li><a href="juegos.html">Juegos Iniciales</a></li>
        <li><a href="finales.html">Juegos de finales</a></li>
        <li><a href="estudiar.html">Estudiar</a></li>
      </ul>
    </li>
    <li><a href="clases.html">Mis clases</a></li>
    <li><a href="misvideos.html">Mis videos</a></li>
    <li><a href="nosotros.html">Acerca de nosotros</a></li>
    <li><a href="contacto.html">Contacto</a></li>
  </ul>
</nav> 
  `;
}

document.getElementById("navT").innerHTML = `
          
          ${navT.map(Template).join("")}
          
        `;
