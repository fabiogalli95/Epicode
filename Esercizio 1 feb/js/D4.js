


/* ESERCIZIO 1

 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1, l2) =>  l1 * l2 ;
console.log(area(5, 3))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (n1, n2) => {
    if(n1 === n2){
        return (n1 + n2) * 3;
    }else{
        return n1 + n2;
    }
}

console.log(crazySum(1,1));
console.log(crazySum(3,3));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = (n1) => {
    if (n1 > 19){
        return Math.abs(n1 - 19) * 3;
    }else{
        return Math.abs(n1 - 19);
    }
}
console.log(crazyDiff(40));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = (n) => {
    if( (n >= 20 && n <= 100  ) || (n === 400)){
        return true;
    }else{
        return false;
    }
}

console.log(boundary(201))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = (frase) => {
    
    if(frase.search('EPICODE') === -1){
        return 'EPICODE ' + frase;
    }else{
        return frase;
    }
    
}

//alternativa stringa.startsWith('EPICODE');
// alternativa stringa.indexOf('EPICODE') ===0 ;
console.log(epify('Ciao sono'))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = (pos) => {
    if( pos % 7 ===0 || pos % 3 === 0){
        return true;
    }else {
        return false;
    }
}
console.log('il valore passato è multiplo di 3 o 7? ' + check3and7(80));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = (epicode) => { return  epicode.split('').reverse().join('')}
console.log(reverseString('EPICODE'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = (stringa_upper) => {
    stringa_upper = stringa_upper.split(" ");
for (i= 0; i< stringa_upper.length; i++){
    stringa_upper[i] = stringa_upper[i].charAt(0).toUpperCase() + stringa_upper[i].substring(1);
}
return stringa_upper = stringa_upper.join(" ");
}

console.log(upperFirst('ciao sono fabio'));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = (stringa_cut) => {
    return stringa_cut.substring(1, stringa_cut.length - 1);
}
console.log(cutString('ciao sono fabio'));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = (n) => {
    let arrayNumeri = [];
    for (i= 0; i< n; i++){
        arrayNumeri.push(Math.floor(Math.random() * 11));
    }
    return arrayNumeri;
} 
const arrayNumeri = giveMeRandom(10);
console.log(arrayNumeri);