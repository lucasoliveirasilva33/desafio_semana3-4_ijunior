let formulario = document.querySelector('.formulario')
let mensagemSucesso = document.querySelector('.mensagem-sucesso')
let botaoEnviar = document.querySelector('.botao-enviar')
let botaoContinuar = document.querySelector('.botao-continuar')

let entradaNome = document.querySelector('.entrada-nome')
let entradaNumero = document.querySelector('.entrada-numero')
let entradaExpMM = document.querySelector('.entrada-exp-MM')
let entradaExpYY = document.querySelector('.entrada-exp-YY')
let entradaCVC = document.querySelector('.entrada-cvc')

let cartaoNome = document.querySelector('.cartao-nome')
let cartaoNumero = document.querySelector('.cartao-numero')
let cartaoDataExp = document.querySelector('.cartao-data-exp')
let cartaoCVC = document.querySelector('.cartao-cvc')
let erroNome = document.querySelector('.erro-nome')
let erroNumero = document.querySelector('.erro-numero')
let erroDataExp = document.querySelector('.erro-data-exp')
let erroCVC = document.querySelector('.erro-cvc')
let erroGeral = document.querySelector('.erro-geral')


function existeNumero(str) {
    return str.match(/\d/g) != null
}

function existeLetra(str){
    return str.match(/[a-zA-Z]/g) != null
}

entradaNome.addEventListener('input', (e) => {
    cartaoNome.innerText = e.target.value
    
    erroNome.style.display = 'none'
    e.target.style.color = 'black'
    if (existeNumero(e.target.value) || e.target.value < 0) {
        erroNome.style.display = 'block'
        e.target.style.color = 'red'
    }
})

entradaNumero.addEventListener('input', (e) => {
    cartaoNumero.innerText = e.target.value

    erroNumero.style.display = 'none'
    e.target.style.color = 'black'
    if (existeLetra(e.target.value) || e.target.value < 0) {
        erroNumero.style.display = 'block'
        e.target.style.color = 'red'
    }
})

entradaExpMM.addEventListener('input', (e) => {
    const ano = entradaExpYY.value == null ? '00' : entradaExpYY.value
    
    cartaoDataExp.innerText = e.target.value + '/' + ano

    erroDataExp.style.display = 'none'
    e.target.style.color = 'black'
    if (existeLetra(e.target.value)) {
        erroDataExp.style.display = 'block'
        e.target.style.color = 'red'
    }

})

entradaExpYY.addEventListener('input', (e) => {
    const mes = entradaExpMM.value == null ? '00' : entradaExpMM.value
    cartaoDataExp.innerText = mes + '/' + e.target.value

    erroDataExp.style.display = 'none'
    e.target.style.color = 'black'
    if (existeLetra(e.target.value)) {
        erroDataExp.style.display = 'block'
        e.target.style.color = 'red'
    }
})

entradaCVC.addEventListener('input', (e) => {
    cartaoCVC.innerText = e.target.value

    erroCVC.style.display = 'none'
    e.target.style.color = 'black'
    if (existeLetra(e.target.value) || e.target.value < 0) {
        erroCVC.style.display = 'block'
        e.target.style.color = 'red'
    }
})

botaoEnviar.addEventListener('click', () => {
    const erro = 
        existeNumero(entradaNome.value) || 
        existeLetra(entradaNumero.value) ||
        existeLetra(entradaExpMM.value) ||
        existeLetra(entradaExpYY.value) ||
        existeLetra(entradaCVC.value);
    
    erroGeral.style.display = 'none'
    if (erro) {
        erroGeral.style.display = 'block'
    } else {
        formulario.style.display = 'none'
        mensagemSucesso.style.display = 'flex'
    }
})

botaoContinuar.addEventListener('click', () => {
    formulario.style.display = 'block'
    mensagemSucesso.style.display = 'none'
})
