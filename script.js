let qtd = 0;
do {
    qtd = parseInt(prompt("Com quantas cartas você quer jogar?"));

}while (qtd%2 !== 0 || qtd < 4 || qtd > 14); 

// function adicionarCartas() {
//     const carta = document.querySelector(".carta").parentNode;
    
//     for(let i = 0; i < qtd; i++) {
//         carta.innerHTML += `
//             <div class="card" data-identifier="card" onclick="virarCarta(this)">
//                 <p class="front-face" data-identifier="front-face">
//                 <img src="assets/front.png"></p>
//                 <p class="back-face" data-identifier="back-face">
//                 <img src="assets/explodyparrot.gif"></p>
//             </div>
//             `;
//     }
// }

adicionarCartas();

// listadeCartas.sort(comparador);
// function comparador() { 
// 	return Math.random() - 0.5; 
// }

function virarCarta(flip) {
    flip.classList.toggle('fliped');
    console.log("virei");
}


