
const frases = [
    'aiai',
    'uiuiui',
    'cala a bocaaaaaa',
    'pilaaantra'
] 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function fnFrase(){
    document.getElementById("btnNovaFrase").disabled = true;
    setTimeout(function() {
        document.getElementById("btnNovaFrase").disabled = false;
    }, 2700);
    
    var num = getRandomInt(frases.length)
    var current = document.getElementById('textoFrase')

    while (current.innerHTML == frases[num]){
        num = getRandomInt(frases.length)
    }

    confetti({
        particleCount: 150,
        spread: 70,
        origin: {y: .6}
    })

    current.innerHTML = frases[num]
    document.getElementById("btnCopy").innerHTML = 'COPIAR FRASE'
}

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    swal({
        icon: 'success',
        title:'Frase copiada, faça bom uso!!!'
    })
}

const audio = new Audio()
audio.src = "/sounds/badunts.mp3"