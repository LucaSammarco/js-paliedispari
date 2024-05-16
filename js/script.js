// Palidroma
// // Chiedere all’utente di inserire una parola
// // Creare una funzione per capire se la parola inserita è palindroma

// let parola = prompt("Inserisci la prima parola");


function palindromChecker(word) {

    let parolaInvertita ="";


    for (let index = word.length -1; index >= 0; index--) {
      
      parolaInvertita += word[index];
      
      
    }

    return parolaInvertita
    console.log(parolaInvertita)
}
