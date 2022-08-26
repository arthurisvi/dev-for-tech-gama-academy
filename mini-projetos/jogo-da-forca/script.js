let categoria = document.querySelector("#category");
/* Elemento HTML referente a lista das letras erradas*/
let letrasErradas = document.querySelector(".wrongLetters");
/* Elemento HTML referente a palavra oculta
   Utilizaremos esse mesmo elemento para exibir as mensagens do jogo*/
let palavraInterface = document.querySelector(".dashes");
/* Array com elementos HTML referentes aos olhos do personagem */
const olhos = Array.from(document.querySelectorAll(".eyes"));
/* Array com elementos HTML referentes as partes do corpo */
let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);
/* Palavra corrente */
let palavraProposta;
/* Lista das letras erradas */
let letrasErradasArray = [];
/* Index da parte do corpo corrente */
let indiceBoneco;
/* Numero de chances do jogador */
let numTentativas = 6;
/* Valor para opacidade dos olhos */
const opacidadeOlhos = 0.3;
// Criando categorias
const categorias = {
    animais: ["gato", "leao", "zebra"],
    frutas: ["uva", "limao", "pera"],
};
let letras;

function sorteiaCategoria(categorias) {
    let index = Math.floor(Math.random() * Object.keys(categorias).length);
    categoria.innerHTML = Object.keys(categorias)[index];
    let categoriaSorteada = Object.values(categorias)[index];
    sorteiaPalavra(categoriaSorteada);
}

// Função para sortear a palavra
function sorteiaPalavra(categoria) {
    let index = Math.floor(Math.random() * categoria.length);
    palavraProposta = categoria[index];
    console.log("Palavra Proposta: ", palavraProposta);
    ocultaPalavra();
    return palavraProposta;
}

/*
Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa
*/
function retornaLetra(e) {
    tentativa(e.key);
}

function tentativa(e) {
    letras = palavraProposta.split("");
    if (!letras.includes(e)) return verificaSeLetraErradaJaEstaNaTelaeNoArray(e);
    verificaSeLetraCertaJaEstaNatela(e);

    console.log("letra", e);
}

// Verifica letras erradas
function verificaSeLetraErradaJaEstaNaTelaeNoArray(e) {
    if (letrasErradasArray.includes(e)) return;
    letrasErradas.innerHTML += e;
    letrasErradasArray.push(e);
    if (numTentativas == 0) {
        desenhaOlhos();
        alert("Você perdeu!");
    } else {
        desenhaBoneco();
    }

    numTentativas--;
}

function verificaSeLetraCertaJaEstaNatela(e) {
    if (!palavraInterface.innerHTML.includes(e)) {
        palavraInterface.innerHTML += e;
    }
}

function ocultaPalavra() {
    let palavraOcultada = "";
    for (let i = 0; i < palavraProposta.length; i++) {
        palavraOcultada += "-";
    }
    exibePalavraInterface(palavraOcultada);
}

function exibePalavraInterface(palavra) {
    palavraInterface.innerHTML = palavra;
}

/*
Desenha a parte do corpo corrente
*/
function desenhaBoneco() {
    partesBoneco[indiceBoneco].classList.remove("hide");
    indiceBoneco++;
}

/*
Desenha os olhos do personagem
*/
function desenhaOlhos() {
    olhos.forEach((olho) => {
        olho.style.opacity = 1;
        olho.style.zIndex = 10;
    });
}

/*
Oculta as partes do corpo do personagem
*/
function ocultaBoneco() {
    olhos.forEach((olho) => {
        olho.style.opacity = opacidadeOlhos;
    });
    partesBoneco.forEach((parteBoneco) => {
        parteBoneco.classList.add("hide");
    });
}

/*
Inicia as configurações do jogo
*/
function iniciaJogo() {
    indiceBoneco = 0;
    letrasErradasArray = [];
    letrasErradas.innerHTML = "Letras erradas: ";
    sorteiaCategoria(categorias);
    window.addEventListener("keypress", retornaLetra);
}

function verificarOFimDeJogo() {
    window.removeEventListener("keypress", retornaLetra);

    desenhaOlhos();
}