// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// 1. Chiedo all'utente il numero di chilometri che vuole percorrere (0,21 euro x km)
const x = Number(prompt("Buongiorno, quanti chilometri vuole percorrere?"))
// 2. Chiedo all'utente la sua età
const y = Number(prompt("Buongiorno, quanti anni ha?"))
// 3. Calcolo il prezzo del biglietto sapendo che OGNI km = 0,21 euro e il risultato deve avere formato 0,00 euro:
// SE età < di 18 avrò >>> N. KM 20%
// SE età > di 65 avrò >>> N KM 40%
let z = 0.21 * x
console.log(z)
if (y < 18){
    console.log(( z * 20) / 100)
}
if (y > 65){
    console.log(( z * 40) / 100)
}