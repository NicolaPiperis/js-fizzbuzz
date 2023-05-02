// DICHIARO LE VARIABILI
let container

// SELEZIONIAMO L'ELEMENTO CONTENITORE
container = document.getElementById("container");
console.log(container);

// CICLIZZIAMO E ATTIVIAMO LA FUNZIONE
for (let i = 1; i <= 100; i++) {

    // CREIAMO L'ELEMENTO PRINCIPALE
    let square = document.createElement ("div");
    square.classList.add("square")
    console.log(square);
    // METTIAMO IL VALORE ALL'INTERNO
    square.append(i);

    // GLI FORNIAMO UNA LOCALIZZAZIONE
    container.append(square); 

    if (i % 3 === 0 && i % 5 === 0){
        square.innerHTML = "FizzBuzz"
        square.classList.add("fizz_buzz")
    }

    else if (i % 5 === 0) {
        square.innerHTML = "buzz"
        square.classList.add ("buzz")
    }

    else if(i % 3 === 0) {
        

        square.innerHTML = "fizz"
        square.classList.add ("fizz")
    }
}




