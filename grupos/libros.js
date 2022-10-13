const book = [
  {
    id: 1,
  },
];

function Template(book) {
  return `
    
  
          Libro PDF
          <a  href="https://www.mediafire.com/file/40fzkxw49rad2xy/Mejore_su_t%25C3%25A1ctica_en_1001_problemas_-_Zen%25C3%25B3n_Franco.pdf/file" 
          target="_blank"><img src="../img/libro.png" class="logozoom" alt=""
        /></a>
        
        
      
      `;
}

document.getElementById("book").innerHTML = `
              
              ${book.map(Template).join("")}
              
            `;
