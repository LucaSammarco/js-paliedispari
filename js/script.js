// Palidroma
//  Chiedere all’utente di inserire una parola
//  Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserisci parola");

if ( palindromChecker(parola.toLowerCase()) === true){
  console.log("palindroma")
}else {
  console.log("non palindroma")
}





function palindromChecker(word) {

    let parolaInvertita ="";


    for (let index = word.length -1; index >= 0; index--) {
      
      parolaInvertita += word[index];
      
      
    }

    if (word == parolaInvertita) {
      return true
    } else {
      return false
    }


}




// ! * Pari e Dispari
  // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
  // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  // Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
  // Dichiariamo chi ha vinto.
    // Human Coding:
    //         * Prompt pari o dispari e prompt numero da 1 a 5
    //         * Creaiamo un numero ramdom per il computer
    //         * creiamo funzione che ha come argomenti due numeri e determiniamo se se la somma è uguale a pari o dispari.
    //         * Se il risultato della funzione è uguale alla scelta dell utente, pari o dispari. Allora ha vinto l'utente se no ha vinto il computer


  

let sceltaUtente = prompt("Scegli pari o dispari:");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"), 10);

if (numeroUtente > 5) {

  while (numeroUtente > 5) {  
  
    let nuovoNumero = parseInt(prompt("Inserisci un numero da 1 a 5"), 10);
      if (nuovoNumero < 6) {

        numeroUtente = nuovoNumero
        
      }
  }
  
}




let numeroComputer = numberGenerator()


if (sceltaUtente === addition(numeroUtente, numeroComputer)) {
    console.log("Vince Utente")
  
} else {
  console.log("Vince Computer")
}



function numberGenerator() {
    let computerNumber = Math.floor(Math.random() * 5) + 1;
    return computerNumber
}

function addition(numberHuman, numberPC) {

  sum = numberHuman + numberPC;
    if (sum % 2 === 0) {
      return "pari"
    } else {
      return "dispari"
    }
  
}


console.log("numero utente " + numeroUtente)
console.log("numero del pc " + numeroComputer)
console.log("scelta utente " + sceltaUtente)