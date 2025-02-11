/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5;
let n2 = 10;

if (n1 > n2) {
  console.log(n1);
} else {
  console.log(n2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n3 = 6;
if (n3 !== 5) {
  console.log("not equal");
} else {
  console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n4 = 25;
if (n4 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n5 = 5;
let n6 = 3;
if (n5 === 8 || n6 === 8 || n5 + n6 === 8 || n5 - n6 === 8) {
  console.log("8");
}

//seconda soluzione
let n7 = 5;
let n8 = 3;
if (n7 === 8) {
  console.log("il primo numero inserito è uguale a 8");
} else if (n8 === 8) {
  console.log("il secondo numero inserito è uguale a 8");
} else if (n7 + n8 === 8) {
  console.log("la somma dei due numeri è uguale a 8");
} else if (n7 - n8 === 8) {
  console.log("la sottrazione dei due numeri è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 55;
let shippingCost = 10;

if (totalShoppingCart > 50) {
  console.log("Totale da addebitare: " + totalShoppingCart + "€");
} else {
  console.log(
    "Totale da addebitare: " + (totalShoppingCart + shippingCost) + "€"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 55;
let blackFridayDiscount = (totalShoppingCart2 * 20) / 100;
let totalDiscounted = totalShoppingCart2 - blackFridayDiscount;

if (totalDiscounted > 50) {
  console.log(
    "Totale da addebitare: " + totalDiscounted + "€ (Spedizione gratuita)"
  );
} else {
  console.log(
    "Totale da addebitare: " +
      (totalDiscounted + shippingCost) +
      "€ (Spedizione inclusa)"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n9 = 30;
let n10 = 35;
let n11 = 40;

if (n9 > n10 && n9 > n11 && n10 > n11) {
  console.log(n9, n10, n11);
} else if (n9 > n10 && n9 > n11 && n11 > n10) {
  console.log(n9, n11, n10);
} else if (n10 > n9 && n10 > n11 && n9 > n11) {
  console.log(n10, n9, n11);
} else if (n10 > n9 && n10 > n11 && n11 > n9) {
  console.log(n10, n11, n9);
} else if (n11 > n9 && n11 > n10 && n9 > n10) {
  console.log(n11, n9, n10);
} else {
  console.log(n11, n10, n9);
}

// seconda soluzione
if (n9 >= n10 && n9 >= n11) {
  if (n10 >= n11) {
    console.log(n9, n10, n11);
  } else {
    console.log(n9, n11, n10);
  }
} else if (n10 >= n9 && n10 >= n11) {
  if (n9 >= n11) {
    console.log(n10, n9, n11);
  } else {
    console.log(n10, n11, n9);
  }
} else {
  if (n9 >= n10) {
    console.log(n11, n9, n10);
  } else {
    console.log(n11, n10, n9);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value1 = "Exodia il proibito";

if (typeof value1 === "number") {
  console.log("la variabile è un numero");
} else {
  console.log("la variabile non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n12 = 60;
let n13 = 15;
function pariDispari(n12) {
  if (n12 % 2 === 0) {
    console.log(n12 + " è pari");
  } else {
    console.log(n12 + " è dispari");
  }
}

pariDispari(n12);
pariDispari(n13);

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val > 5 && val < 10) {
  console.log("Maggiore di 5 e minore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeri = [];
numeri.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[numeri.length - 1] = 100;
console.log(numeri);
