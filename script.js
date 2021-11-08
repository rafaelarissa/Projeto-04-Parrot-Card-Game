let qtd = 0;
do {
    qtd = parseInt(prompt("Com quantas cartas você quer jogar?"));

}while (qtd%2 !== 0 || qtd < 4 || qtd > 14); 

function adicionarCartas() {
    const carta = document.querySelector(".card").parentNode;
    carta.innerHTML = ' ';
    let contadorPrimeiraCarta = 0;
    for(let i = 0; i < qtd; i++) {
        if (contadorPrimeiraCarta <= 1) {
            carta.innerHTML += `
                <div class="card" data-identifier="card" onclick="virarCarta(this)">
                    <p class="front-face" data-identifier="front-face">
                    <img src="assets/front.png"></p>
                    <p class="back-face" data-identifier="back-face">
                    <img src= "assets/explodyparrot.gif"></p>
                </div>
            `;
            contadorPrimeiraCarta++;
        }else if (contadorPrimeiraCarta > 1 && contadorPrimeiraCarta <= 3) {
            console.log("teste");

            carta.innerHTML += `
                <div class="card" data-identifier="card" onclick="virarCarta(this)">
                    <p class="front-face" data-identifier="front-face">
                    <img src="assets/front.png"></p>
                    <p class="back-face" data-identifier="back-face">
                    <img src= "assets/bobrossparrot.gif"></p>
                </div>
            `;
            contadorPrimeiraCarta++;
        }else if (contadorPrimeiraCarta > 3 && contadorPrimeiraCarta <= 5) {
            console.log("teste");

            carta.innerHTML += `
                <div class="card" data-identifier="card" onclick="virarCarta(this)">
                    <p class="front-face" data-identifier="front-face">
                    <img src="assets/front.png"></p>
                    <p class="back-face" data-identifier="back-face">
                    <img src= "assets/fiestaparrot.gif"></p>
                </div>
            `;
            contadorPrimeiraCarta++;
        }else if (contadorPrimeiraCarta > 5 && contadorPrimeiraCarta <= 7) {
            console.log("teste");

            carta.innerHTML += `
                <div class="card" data-identifier="card" onclick="virarCarta(this)">
                    <p class="front-face" data-identifier="front-face">
                    <img src="assets/front.png"></p>
                    <p class="back-face" data-identifier="back-face">
                    <img src= "assets/metalparrot.gif"></p>
                </div>
            `;
            contadorPrimeiraCarta++;
        }else if (contadorPrimeiraCarta > 7 && contadorPrimeiraCarta <= 9) {
            console.log("teste");

            carta.innerHTML += `
                <div class="card" data-identifier="card" onclick="virarCarta(this)">
                    <p class="front-face" data-identifier="front-face">
                    <img src="assets/front.png"></p>
                    <p class="back-face" data-identifier="back-face">
                    <img src= "assets/revertitparrot.gif"></p>
                </div>
            `;
            contadorPrimeiraCarta++;
        }else if (contadorPrimeiraCarta > 9 && contadorPrimeiraCarta <= 11) {
            console.log("teste");

            carta.innerHTML += `
                <div class="card" data-identifier="card" onclick="virarCarta(this)">
                    <p class="front-face" data-identifier="front-face">
                    <img src="assets/front.png"></p>
                    <p class="back-face" data-identifier="back-face">
                    <img src= "assets/tripletsparrot.gif"></p>
                </div>
            `;
            contadorPrimeiraCarta++;
        }else if (contadorPrimeiraCarta > 11 && contadorPrimeiraCarta <= 13) {
            console.log("teste");

            carta.innerHTML += `
                <div class="card" data-identifier="card" onclick="virarCarta(this)">
                    <p class="front-face" data-identifier="front-face">
                    <img src="assets/front.png"></p>
                    <p class="back-face" data-identifier="back-face">
                    <img src= "assets/unicornparrot.gif"></p>
                </div>
            `;
            contadorPrimeiraCarta++;
        }
    }
}

adicionarCartas();

carta.sort(comparador);
    function comparador() { 
 	    return Math.random() - 0.5; 
 }

function virarCarta(flip) {
    flip.classList.toggle('fliped');
    console.log("virei");
}


