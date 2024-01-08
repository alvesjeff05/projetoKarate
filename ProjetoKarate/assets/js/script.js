const valorHist = document.getElementById('historia');
const valorEstilo = document.getElementById('estilo');
const valorCaract = document.getElementById('caract');
const valorFundador = document.getElementById('fundador');
const valorKrtB = document.getElementById('krtB');
const card = document.getElementById('card');




document.getElementById("close").addEventListener("click", () => {
    card.style.display = "none"
})


function imprimirTexto(arrayTexto, element) {
    let historiaCortada = arrayTexto[0].split("|")

    if(element.hasChildNodes()) {
        return ;
    }

    let br = document.createElement("br")
    historiaCortada.map((e) => {
        let p = document.createElement("p")

        p.innerHTML += e
        element.appendChild(p)
        element.appendChild(br)


    })


}



function handleShowCard(){
        card.style.display = "block"
    
}



function imprimirHist(){

    handleShowCard()
    imprimirTexto(historia, valorHist)
    valorEstilo.textContent = '';
    valorCaract.textContent = '';
    valorFundador.textContent = '';
    valorKrtB.textContent = '';
}


function imprimirEstilo(){
    handleShowCard()

    imprimirTexto(estilo, valorEstilo)

    valorHist.textContent = '';
    valorCaract.textContent = '';
    valorFundador.textContent = '';
    valorKrtB.textContent = '';
}

function imprimirCaract(){
    handleShowCard()

    imprimirTexto(caract, valorCaract)

   valorHist.textContent = '';
    valorEstilo.textContent = '';
    valorFundador.textContent = '';
    valorKrtB.textContent = '';
}

function imprimirFundador(){
    handleShowCard()

    imprimirTexto(fundador, valorFundador)

   valorHist.textContent = '';
    valorEstilo.textContent = '';
    valorCaract.textContent = '';
    valorKrtB.textContent = '';
}

function imprimirKrtB(){
    handleShowCard()

    imprimirTexto(krtB, valorKrtB)

   valorHist.textContent = '';
    valorEstilo.textContent = '';
    valorCaract.textContent = '';
    valorFundador.textContent = '';
}

document.getElementById('btnHist').addEventListener('click', imprimirHist);
document.getElementById('btnEstilo').addEventListener('click', imprimirEstilo);
document.getElementById('btnCaract').addEventListener('click', imprimirCaract);
document.getElementById('btnFundador').addEventListener('click', imprimirFundador);
document.getElementById('btnkrtB').addEventListener('click', imprimirKrtB);