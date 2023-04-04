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

  if (punteggio == 84){

    griglia.innerHTML = "hai visnto con il punteggio massimo complimenti!!!!"

  } else {
    
    punteggioElement.innerHTML = `Punteggio: ${punteggio}`;
  }
  return punteggio
}

//funzione controllo e registro numero bombe caselle adiacenti

function contrcaselleadiacenti(y, difset){

  let casselleadiacenti = []

  if ((y == 11 || y == 21 || y == 31 || y == 41 || y == 51 || y == 61 || y == 71 || y == 81) && (difset == diff1)) {
    casselleadiacenti.push(y + 1) 
    casselleadiacenti.push(y + 10)
    casselleadiacenti.push(y + 11)
    casselleadiacenti.push(y - 9)
    casselleadiacenti.push(y - 10)
  } else if((y == 20 || y == 30 || y == 40 || y == 50 || y == 60 || y == 70 || y == 80 || y == 90) && (difset == diff1)){
    casselleadiacenti.push(y + 9)
    casselleadiacenti.push(y + 10)
    casselleadiacenti.push(y - 1)
    casselleadiacenti.push(y - 10)
    casselleadiacenti.push(y - 11)
  } else if((y == 2 || y == 3 || y == 4 || y == 5 || y == 6 || y == 7 || y == 8 || y == 9) && (difset == diff1)){
    casselleadiacenti.push(y + 1)
    casselleadiacenti.push(y + 9)
    casselleadiacenti.push(y + 10)
    casselleadiacenti.push(y + 11)
    casselleadiacenti.push(y - 1)
  } else if ((y == 92 || y == 93 || y == 94 || y == 95 || y == 96 || y == 97 || y == 98 || y == 99) && (difset == diff1)){
    casselleadiacenti.push(y + 1)
    casselleadiacenti.push(y - 9)
    casselleadiacenti.push(y - 10)
    casselleadiacenti.push(y - 11)
    casselleadiacenti.push(y - 1)
  } else if((y == 1) && (difset == diff1)){
    casselleadiacenti.push(y + 1) 
    casselleadiacenti.push(y + 10)
    casselleadiacenti.push(y + 11)
  } else if((y == 91) && (difset == diff1)){
    casselleadiacenti.push(y + 1) 
    casselleadiacenti.push(y - 9)
    casselleadiacenti.push(y - 10)
  } else if((y == 10) && (difset == diff1)){
    casselleadiacenti.push(y + 9) 
    casselleadiacenti.push(y + 10)
    casselleadiacenti.push(y - 1)
  } else if((y == 100) && (difset == diff1)){
    casselleadiacenti.push(y - 10) 
    casselleadiacenti.push(y - 9)
    casselleadiacenti.push(y - 1)
  } else {
    casselleadiacenti.push(y + 1)
    casselleadiacenti.push(y + 9)
    casselleadiacenti.push(y + 10)
    casselleadiacenti.push(y + 11)
    casselleadiacenti.push(y - 1)
    casselleadiacenti.push(y - 9)
    casselleadiacenti.push(y - 10)
    casselleadiacenti.push(y - 11)
  }

  let contatore = 0

  for (let i = 0; i < difset.length; i++) {
    if (casselleadiacenti.includes(difset[i])) {
      contatore++;
    }
  }

  return contatore
  
}

//funzione per generare i singoli elementi div con classe e difficoltà per gestire il comportameto all click 

function generabox(y, classe, difficoltà) {
  let box = document.createElement("div");
  box.classList.add(classe);
  box.innerHTML = ""
  box.addEventListener("contextmenu", function(event) {
    
    event.preventDefault();
    
    if (!box.classList.contains("blue")) { // marchio bombe se la casella non è stata scoperta

      box.innerHTML = "*"

    }
  
  });  
  box.addEventListener("click", function() {

    // contrcaselleadiacenti(y, diff1)
    let nuovonumero = contrcaselleadiacenti(y, diff1)
        
    if (difficoltà.includes(y)) { // controlla se il numero è presente nell'array numeriCasuali
      
      box.classList.add("red");
      console.log("boom");
      
      let griglia = document.querySelector(".griglia"); // seleziona la griglia
      griglia.innerHTML = `Game over il tuo punteggio finale è: ${aggiornaPunteggio()}`; // svuota il contenuto di griglia e mostra punteggio finale

    } else if (casellevuoteselezionate.includes(y)) {
      
    }else {

      box.classList.add("blue");
      casellevuoteselezionate.push(y)
      aggiornaPunteggio()
      box.innerHTML = nuovonumero;

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
    btnc.classList.add("none");

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
    btnc.classList.add("none");

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
    btnc.classList.add("none");

    for (let y = 1; y <= 49; y++) {
      let newBox = generabox(y, "box3", diff3);
      griglia.appendChild(newBox);
    }

    console.log(diff3);

});

