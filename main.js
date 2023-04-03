//funzione per creare un array contenente maxcifre all'intenro di range senza ripeterle 
//e pussharle ad un array legata a generanumerirandomunici

function generanumerirandomunici(maxcifre, range) {
  let numeri = [];

  while (numeri.length < maxcifre) {
    let numero = Math.floor(Math.random() * range) + 1;

    if (!numeri.includes(numero)) {
      numeri.push(numero);
    }
  }

  return numeri;
}

// estrai l'array generato da generanumerirandomunici per le varie difficoltà

let diff1 = generanumerirandomunici(16, 100);
let diff2 = generanumerirandomunici(16, 81);
let diff3 = generanumerirandomunici(16, 49); 

//funzione calcolo punteggio

casellevuoteselezionate = []

function aggiornaPunteggio() {
  let punteggio = casellevuoteselezionate.length;
  let punteggioElement = document.querySelector(".punteggio");
  punteggioElement.innerHTML = `Punteggio: ${punteggio}`;
  return punteggio
}

//funzione per generare i singoli elementi div con classe e difficoltà per gestire il comportameto all click 

function generabox(y, classe, difficoltà) {
  let box = document.createElement("div");
  box.classList.add(classe);
  box.innerHTML = y;
  box.addEventListener("click", function() {
        
    if (difficoltà.includes(y)) { // controlla se il numero è presente nell'array numeriCasuali
      
      box.classList.add("red");
      console.log("boom");
      
      let griglia = document.querySelector(".griglia"); // seleziona la griglia
      griglia.innerHTML = `Game over il tuo punteggio finale è: ${aggiornaPunteggio()}`; // svuota il contenuto di griglia e mostra punteggio finale

    } else if (casellevuoteselezionate.includes(y)) {
      
      
    } else {

      box.classList.add("blue");
      casellevuoteselezionate.push(y)
      aggiornaPunteggio()

    }
  });
  return box;
}

//variabili bottoni ed elementi pagina
  
let start1 = document.getElementById("start1");
let start2 = document.getElementById("start2");
let start3 = document.getElementById("start3");
let griglia = document.querySelector(".griglia");
let btnc = document.querySelector(".btnc");

//inizializazione difficoltà al click
  
start1.addEventListener("click", function() {

    start1.classList.add("none");
    start2.classList.add("none");
    start3.classList.add("none");

    for (let y = 1; y <= 100; y++) {
      let newBox = generabox(y, "box", diff1);
      griglia.appendChild(newBox);
    }

    console.log(diff1);

});

start2.addEventListener("click", function() {

    start1.classList.add("none");
    start2.classList.add("none");
    start3.classList.add("none");

    for (let y = 1; y <= 81; y++) {
      let newBox = generabox(y, "box2", diff2);
      griglia.appendChild(newBox);
    }

    console.log(diff2);

});

start3.addEventListener("click", function() {

    start1.classList.add("none");
    start2.classList.add("none");
    start3.classList.add("none");

    for (let y = 1; y <= 49; y++) {
      let newBox = generabox(y, "box3", diff3);
      griglia.appendChild(newBox);
    }

    console.log(diff3);

});

