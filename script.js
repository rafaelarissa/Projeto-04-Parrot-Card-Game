let qtd = 0;
do {
    qtd = parseInt(prompt("Com quantas cartas você quer jogar?"));

}while (qtd%2 !== 0 || qtd < 4 || qtd > 14); 

function adicionarCartas() {
    const carta = document.querySelector(".carta");
    
    for(let i = 0; i < qtd; i++) {
        carta.innerHTML += `
        <div class="carta" data-identifier="card">
            <div class="carta-frente" data-identifier="front-face">
            <img src="assets/front.png" alt="Parrot">
            </div>
        </div>
        `;
    }
}

adicionarCartas();

carta.sort(comparador);

listadeCartas.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}

