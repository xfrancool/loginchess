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
            <li><a href="inicio.html">Inicio</a></li>
            <li>
              <a class="dropdown-arrow" href="#">Material de trabajo</a>
              <ul class="sub-menus">
                <li><a href="materiales.html">Nivel inicial</a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
              </ul>
            </li>

            <li>
              <a class="dropdown-arrow" href="#">Material Didáctico</a>
              <ul class="sub-menus">
                <li><a href="video.html">Videos Adicionales</a></li>
                <li><a href="conceptos.html">Conceptos iniciales</a></li>
                <li><a href="juegos.html">Juegos Iniciales</a></li>
                <li><a href="finales.html">Juegos de finales</a></li>
                <li><a href="estudiar.html">Estudiar</a></li>
              </ul>
            </li>
            <li><a href="clases.html">Mis clases</a></li>
            <li>
              <a class="dropdown-arrow" href="#">Grupos</a>
              <ul class="sub-menus">
                <li><a href="grupos/primero/grupo1.html">Grupo1</a></li>
                <li><a href="grupos/primeroA/grupoA.html">Jose Maria</a></li>
                <li><a href="#">G3</a></li>
                <li><a href="#">G4</a></li>
              </ul>
            </li>
            <li>
              <a class="dropdown-arrow" href="#">Premium</a>
              <ul class="sub-menus">
                <li><a href="grupos/sergio/sergio.html">Sergio</a></li>
                <li><a href="grupos/eric/eric.html">Eric</a></li>
                <li><a href="grupos/mateo/mateo.html">Mateo</a></li>
              
                <li><a href="#"></a></li>
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
