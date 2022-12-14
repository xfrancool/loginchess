const Temp = [
  {
    id: 1,
  },
];

function Template(Temp) {
  return `
  <div class="card animate__animated animate__pulse animate__delay-1s">
            <div class="textcard">
                <p class="parrafocard">
                    <h3>Introducción</h3>
                    El Ajedrez es un juego de mesa para dos jugadores, se utiliza un tablero de juego compuesto de un cuadrado formado por 64 casillas en 8 filas y 8 columnas, las casillas son de dos colores y están alternadas por color, cada jugador al inicio del juego cuenta con 16 piezas. <br>

                    El objetivo del juego es colocar al rey contrario en la posición en la que no puede evitar ser capturado, esta posición se llama jaque mate.
                </p>
              </div>
          
          
          
        </div>
        <div class="card animate__animated animate__pulse animate__delay-1s">
            <div class="textcard">
                <p class="parrafocard">
                    <h3>¿Qué es el Ajedrez?</h3>
                    El ajedrez es un juego de ingenio, para dos jugadores, en el que el azar no interviene en absoluto y que requiere un importante esfuerzo intelectual. Cada jugador dispone de dieciséis piezas. <br> Un jugador juega con las piezas blancas y otro con las negras.<br> Cada grupo de piezas consta de un rey, una reina, dos alfiles, dos caballos, dos torres y ocho peones. <br>

                    Se juega sobre un tablero dividido en 64 casillas de colores alternados (normalmente blanco y negro).<br> El tablero se coloca ante los jugadores de tal modo que la casilla de la esquina situada a la derecha de cada uno de ellos sea blanca.
                </p>
              </div>

          
        </div>
        <div class="card animate__animated animate__pulse animate__delay-1s">
            <div class="textcard">
                <p class="parrafocard">
                    <h3>Propósito del Ajedrez</h3>
                    El objetivo del juego es capturar al rey del otro jugador. <br>La captura no se completa nunca, pero una vez que el rey es atacado y no puede escapar de esa captura, se dice que es un jaque mate y el juego finaliza.
                </p>
               
              </div>
        </div>
        <div class="card animate__animated animate__pulse animate__delay-1s">
            <div class="textcard">
                
                    <h3>Veamos las piezas</h3>
                  <img src="../img/materiales/movimientospiezas.jpg" alt="" class="imgpiezas">
                  <p><a href="https://lichess.org/learn#/1" target="_blank">Click aqui para hacer ejercicios de movimientos iniciales</a></p>
               
              </div>
        </div>
        <div class="card animate__animated animate__pulse animate__delay-1s">
            <div class="textcard">
                <p class="parrafocard">
                    <h3>Fin del Juego</h3> 
                    Gana la partida el jugador que haya conseguido jaque mate al rey de su oponente o que su oponente se haya rendido. <br>
                    <br>

<strong>Tablas</strong> <br>

 Se dice que la partida está en tablas cuando el rey del jugador al que le toca mover no se encuentra en jaque, y este jugador no puede realizar ningún movimiento permitido. Entonces se dice que el rey del jugador esta “ahogado”. Esto finaliza inmediatamente el juego.<br>

La partida se halla en tablas si los dos jugadores así lo han acordado de mutuo acuerdo.
                </p>
               
              </div>

        </div>
        <div class="card animate__animated animate__pulse animate__delay-1s">
            <div class="textcard">
                <p class="parrafocard">
                    <h3>Propósitos Generales de la Enseñanza del Ajedrez</h3>
                    - Desarrollar en el individuo una actitud favorable hacia el ajedrez que permita apreciarlo como elemento generador de cultura. <br><br>

- Desarrollar en el individuo su potencial intelectual.<br><br>

- Garantizar al individuo la adquisición de conocimientos, habilidades y destrezas básicas necesarias para la incorporación a la vida activa.<br><br>

- Favorecer la asimilación de las características del ajedrez que contribuyen con el armonioso desarrollo intelectual, moral y ético de la personalidad.<br><br>

- Priorizar la resolución de problemas. El aprendizaje orientado a la resolución de problemas les brinda la oportunidad de analizar, evaluar y proponer alternativas de solución a situaciones de la vida diaria.

Conclusión
                </p>
              </div>
          
          
          
        </div>
        <div class="card animate__animated animate__pulse animate__delay-1s">
            <div class="textcard">
                <p class="parrafocard">
                    <h3>Conclusión</h3>
                    El ajedrez es un juego de mesa para dos personas. <br><br>

Las reglas y principios básicos del ajedrez son fáciles de dominar, pero las sutilezas del juego exigen un estudio en profundidad y un alto grado de concentración. <br><br>El ajedrez es un juego que gusta a casi todo el mundo; los jugadores inexpertos o principiantes pueden disfrutar del juego compitiendo con otros jugadores de su mismo nivel.<br><br>

Es uno de los juegos más populares del mundo. Se considera no sólo un juego, sino un arte, una ciencia y un deporte mental. Esto último es muy apropiado, dado que se juega a menudo de forma competitiva.<br><br>La enseñanza del ajedrez puede ser útil como forma de desarrollar el intelecto.<br><br>
                </p>
              </div>
          
  
    `;
}

document.getElementById("conceptos").innerHTML = `
            
            ${Temp.map(Template).join("")}
            
          `;
