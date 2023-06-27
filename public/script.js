
const frases = [
    '"Eu espero que na próxima reencarnação eu nasça com uma rolona no meio das pernas."',
    '"Jesus é da galera."',
    '"Na minha cabeça, homem não precisa ser inteligente."',
    '"É engraçado que lá no Japão eles passavam fome."',
    '"Açúcar é o caralho, mamãe me passou pimenta."',
    '"A esperança me irrita."',
    '"Tem um pênis com meu nome."',
    '"Eu engasguei com o pirulito na boca."',
    '"Nascer com pai pobre é destino, casar com homem pobre é burrice."'
] 

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function fnFrase(){
    document.getElementById('macacoGif').style.display = 'none'
    document.getElementById('textoFrase').style.display = 'block'
    document.getElementById("btnCopy").style.display = 'block'
    

 
    //easter egg do macaco
    
    var monkeyOdd = getRandomInt(20)
    if (monkeyOdd == 1) {    
        if (document.getElementById('textoFrase').innerHTML != '') {
            
            var angels = new Audio('sounds/angels.mp3');
            angels.play();

            document.getElementById("btnNovaFrase").disabled = true;
            setTimeout(function() {
                document.getElementById("btnNovaFrase").disabled = false;
            }, 11000);
            
            document.getElementById('macacoGif').style.display = 'block'
            document.getElementById('textoFrase').style.display = 'none'
            document.getElementById('textoFrase').innerHTML = ''

            document.getElementById("btnCopy").style.display = 'none'
            document.getElementById("autoria").innerHTML = '- Raasch, Nathieli'

            confetti({
                particleCount: 150,
                spread: 70,
                origin: {y: .6}
            })
            return
        }
    }else{console.log('nice')}
    
    //funcionalidade normal

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
    document.getElementById("autoria").innerHTML = '- Raasch, Nathieli'
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