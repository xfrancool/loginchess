const aplicaciones = [
  {
    id: 1,
  },
];

function Template(aplicaciones) {
  return `
    
  <h2 id="titleapk">Aplicaciones de trabajo</h2>
  <br>
   <h4 class="cap">
     Chessis
     <a  href="https://play.google.com/store/apps/details?id=com.chessimprovement.chessis" 
     target="_blank"><img src="../img/apk.svg" class="" id ="googleplay" alt=""
    /></a>
   </h4>
   <h4 class="cap">
     Lichess
     <a  href="https://play.google.com/store/apps/details?id=org.lichess.mobileapp" 
     target="_blank"><img src="../img/apk.svg" class="" id ="googleplay" alt=""
     /></a>
   </h4>
      
      `;
}

document.getElementById("aplicaciones").innerHTML = `
              
              ${aplicaciones.map(Template).join("")}
              
            `;
