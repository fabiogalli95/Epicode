// Funzione per caricare il nome salvato da localStorage
function mostraNome() {
    const nomeSalvato = localStorage.getItem("nome");
    if (nomeSalvato) {
      document.getElementById("nome").value = nomeSalvato;
      document.getElementById("nome-salvato").textContent = `Nome salvato: ${nomeSalvato}`;
    }
  }
  
  // Funzione per salvare il nome in localStorage
  function salvaNome() {
    const nome = document.getElementById("nome").value;
    localStorage.setItem("nome", nome);
    document.getElementById("nome-salvato").textContent = `Nome salvato: ${nome}`;
  }
  
  // Funzione per rimuovere il nome da localStorage
  function rimuoviNome() {
    localStorage.removeItem("nome");
    document.getElementById("nome").value = "";
    document.getElementById("nome-salvato").textContent = "";
  }
  
  // Funzione per il contatore
  function aggiornaContatore() {
 
    if (sessionStorage.getItem("tempoInizio")) {
      
      tempoTrascorso = Math.floor((Date.now() - sessionStorage.getItem("tempoInizio")) / 1000);
    } else {
       sessionStorage.setItem("tempoInizio", Date.now());
    }
    document.getElementById("contatore").textContent = tempoTrascorso;
  }
  



  
  

  const init = () => {
    // Caricamento del nome salvato

 mostraNome();
  
 // Event listener per il salvataggio del nome
 document.getElementById("salva-nome").addEventListener("click", salvaNome);
 
 // Event listener per la rimozione del nome
 document.getElementById("rimuovi-nome").addEventListener("click", rimuoviNome);
 // contatore 
 aggiornaContatore();
 // Aggiornamento del contatore ogni secondo
 setInterval(aggiornaContatore, 1000);
  }




  window.onload = () => {
    init();
  }