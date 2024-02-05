
 
 
 /* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

       const changeTitle = function () {
        document.querySelector('h1').innerText = 'Super Titolo';
       }
       changeTitle();
       

       /* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */
 
       const addClassToTitle = function () {
        document.querySelector('h1').className = 'myHeading';
       }
       addClassToTitle();
 
       /* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */
 
       const changePcontent = function () {
        
        for(let i = 0; i < document.querySelectorAll('div p').length; i++){
            document.querySelectorAll('div p')[i].innerText = 'Siamo p figli di div';
        }
        
       }
       
       changePcontent();

       /* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */
 
       const changeUrls = function () {
        
            for(let i = 0; i < document.querySelectorAll('a:not(footer a)').length; i++){   
                document.querySelectorAll('a:not(footer a)')[i].href = 'https://www.google.com';
            }
       }

       changeUrls();
 
       /* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */
 
       const addToTheSecond = function () {
        const nuovoElementoLista = document.createElement('li');
        nuovoElementoLista.textContent = 'quarto';
        document.getElementById('secondList').appendChild(nuovoElementoLista);
       }
       addToTheSecond()
 
       /* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */
 
       const addParagraph = function () {
        const nuovoParagrafo = document.createElement('p');
        nuovoParagrafo.textContent = 'sono il primo';
        document.querySelectorAll('div')[0].appendChild(nuovoParagrafo);
       }
       addParagraph();
 
       /* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */
 
       const hideFirstUl = function () {
        document.getElementById('firstList').style.display = 'none';
       }
       hideFirstUl();
 
       /* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */
 
       const paintItGreen = function () {
        for (i = 0; i< document.querySelectorAll('ul').length; i++){
            document.querySelectorAll('ul')[i].style.backgroundColor = 'green';
        }
        
       }
       paintItGreen();
 
       /* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */
 
       const makeItClickable = function () {
        const h1 = document.querySelector('h1');
        h1.addEventListener('click', function() {
         
                h1.textContent = h1.textContent.slice(0, -1);

            
             
        });
       }
 
       makeItClickable();
       /* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */
 
       const revealFooterLink = function () {
        document.querySelector('footer').addEventListener('click', function(){
            alert(document.querySelector('footer a').href);
        })
       }
       revealFooterLink();
 
       /* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */
        var data = [
            {
            immagine : 'https://media-assets.wired.it/photos/6482e7f78ad473db097e1fea/4:3/w_1192,h_894,c_limit/Apple-Vision-Pro-Gear.jpg',
            nome_prodotto : 'Apple vision',
            quantita: '200',
            prezzo : '3000 dollari',
            
        }
    ];
    const titles = ['immagine', 'nome prodotto', 'quantità', 'prezzo'];
      
       const generateTable = function () {
        const tableExample = document.createElement('table');
        
       
       
        var headerRow = tableExample.insertRow();
        for(let i = 0; i < titles.length; i++){
            var headerCell = headerRow.insertCell();
            headerCell.textContent = titles[i];
        }
        for(let i = 0; i < data.length; i++){
            var row = tableExample.insertRow();
            for(let j = 0; j<titles.length ; j++){
                
                var cell = row.insertCell();
                if(titles[j] === 'nome prodotto'){
                    cell.textContent = data[i].nome_prodotto;
                }
                if(titles[j] === 'immagine'){
                    var image = document.createElement('img');
                    image.src = data[i].immagine;
                    image.width = '200';
                    cell.appendChild(image);

                }
                if(titles[j] === 'quantità'){
                    cell.textContent = data[i].quantita;
                }
                if(titles[j] === 'prezzo'){
                    cell.textContent = data[i].prezzo;
                }
            }
        }
        document.getElementById('tableArea').append(tableExample);        
       }
       generateTable()
 
       /* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */
 
      const addRow = function(immagine, nome_prodotto, quantita, prezzo){
        let tabella = document.querySelector('table');
       var row = tabella.insertRow(-1);
        for(let j = 0; j<titles.length ; j++){
                
            var cell = row.insertCell();
            if(titles[j] === 'nome prodotto'){
                cell.textContent = nome_prodotto;
            }
            if(titles[j] === 'immagine'){
                var image = document.createElement('img');
                image.src = immagine;
                image.width = '200';
                cell.appendChild(image);

            }
            if(titles[j] === 'quantità'){
                cell.textContent = quantita;
            }
            if(titles[j] === 'prezzo'){
                cell.textContent = prezzo;
            }
        }
      }
      addRow(data[0].immagine, data[0].nome_prodotto, data[0].quantita, data[0].prezzo);
       /* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */
       
       const hideAllImages = function () {
        for(let i = 0; i< document.querySelectorAll('table img').length; i++){
            document.querySelectorAll('table img')[i].style.display = 'none';
       
        }
        }
        hideAllImages();

 
       /* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */
 
       function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
       const changeColorWithRandom = function () {
        document.getElementById('changeMyColor').addEventListener('click', function(){
            document.getElementById('changeMyColor').style.color = getRandomColor();
       
        })
        }
       changeColorWithRandom();