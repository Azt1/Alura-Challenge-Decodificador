const CRIPT_WORDS = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
};

const DECRIPT_WORDS = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u',
};

function criptografar (texto = new String()) {
    var txtCriptografado = new String();
    
    for (let frase of texto) {
        if (CRIPT_WORDS[frase] != null) {
            txtCriptografado += CRIPT_WORDS [frase];
        } else {
            txtCriptografado += palavra;
        }
    }
    return txtCriptografado;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function descriptografar(texto = new String()) {
    
    for (let i = 0; i <5; i++) {

        const identificar = Object.keys(DECRIPT_WORDS)[i];
        const swap = DECRIPT_WORDS[identificar]
        texto = replaceAll(texto, identificar, swap)
    }
    return texto
}

const encriptar = document.querySelector('.btn-encriptar');


encriptar.addEventListener('click', function() {
    const textoArea = document.querySelector('.textoArea')

    const simbolos = /[^a-z A-Z0-9]/g;
    const letrasMaiusculas = /[A-Z]/g;

    if (textoArea.match(simbolos)) {
        alert('Por favor! Digite apenas letras e números.');
        return;
    }
    if (textoArea.match(letrasMaiusculas) != null){
        alert('Por favor! Digite apenas letras minúsculas');
        return;
    }


    const texto_criptografado = criptografar(textoArea);

    document.querySelector('.').classList.remove('empty');
    document.querySelector('.').classList.add('hide');

    const textElement = document.querySelector('.')
})
