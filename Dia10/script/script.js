function juegocartaass() {
    const numero = parseInt(document.getElementById("numeroAd").value);
    const score = document.getElementById("puntos");
    const resultadp = document.getElementById("resultados");
    const carta1 = document.getElementById("carta1");
    const carta2 = document.getElementById("carta2");
    if (isNaN(numero) || numero < 2 || numero > 20) {
        resultadp.textContent = "Por favor ingresa un número válido entre 2 y 20 antes de jugar.";
        return;
    }

    const xhr = new XMLHttpRequest();
    const url = `https://deckofcardsapi.com/api/deck/new/draw/?count=2`;
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            try {
                const daticos = JSON.parse(xhr.responseText);
                const deck = daticos.cards;
                carta1.src = deck[0].image;
                carta2.src = deck[1].image;

                const valorcito = deck.map(carta => {
                    const valorcticco = carta.value;
                    if (valorcticco === "ACE") return 1;
                    if (["KING", "QUEEN", "JACK"].includes(valorcticco)) return 10;
                    return parseInt(valorcticco);

                });
                const sumita = valorcito[0] + valorcito[1];
                let punticos = parseInt(score.textContent);
                if (sumita === numero) {
                    resultadp.textContent = `Has acertado la suma da ${sumita}.`
                    punticos += 30;
                }
                else {
                    resultadp.textContent = `Fallaste pailas la suma da ${sumita}.`
                    punticos -= 20;
                }
                score.textContent = punticos;

                if (punticos <= 0) {
                    resultadp.textContent += "fin del juego";
                    document.getElementById("jugarLu").disabled = true;
                }

            }
            catch (err) {
                console.log(err.message);
            }
        }
    };
    xhr.send();
};
