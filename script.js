let tracos = document.getElementById('tracos')
let mensagem = document.querySelector('.mensagem')
const digitadas = document.querySelector('.digitadas')
const btnComecar = document.querySelector('.btn-comecar')
const btnRecomecar = document.querySelector('.btn-recomecar')
const telaInicial = document.querySelector('.tela-inicial')
const telaFinal = document.querySelector('.tela-final')
const mensagemFinal = document.querySelector('.mensagem-final')
const todasDigitadas = document.querySelector('.todas-digitadas')
const palavra = document.querySelector('.palavra')
const letraDigitada = document.getElementById('letra')
const dicaPalavra = document.querySelector('.dica')
let letrasDigitadas = []
let palavras = [
  'casamento', 'churrasco', 'onibus', 'familia',
  'floricultura', 'marceneiro', 'mosquito', 'abelha',
  'cabeça', 'formiga', 'carneiro', 'caminhão',
  'panela', 'flanela', 'padaria', 'perigoso',
  'urubu', 'cafezal', 'torneira', 'jacare',
  'palacio', 'comercio', 'misterio', 'professor',
  'agricultor', 'apicultor', 'cristal', 'macaco',
  'farofa', 'estrogonofe', 'melancia', 'democracia',
  'felicidade', 'montanha', 'lasanha', 'mortadela', 'cabecalho',
  'formigueiro', 'administrador', 'tempestade', 'relâmpago',
  'ônibus', 'espacial', 'oceano', 'brasileiro', 'edifício',
  'coleira', 'caveira', 'madeira', 'jardineiro', 'escanteio',
  'cadeira', 'sofrimento', 'sorriso', 'gargalhada', 'palhaço',
  'garrafa', 'óculos', 'cabelo', 'travesseiro', 'episodio', 'arroto',
  'xampu', 'irritado', 'mentiroso', 'desodorante', 'supermercado',
  'equipe', 'novato', 'certeza', 'humor', 'costela', 'ventilador',
  'celular', 'caneta', 'geladeira', 'piscina', 'bateria', 'bombeiro', 'banana',
  'carregador', 'mensagem', 'emoji', 'escola', 'caderno', 'empada', 'churrasqueira',
  'teclado', 'explodir', 'submarino'
]
let palavraSecreta
let letras = []

btnComecar.addEventListener('click', () => {
  telaInicial.style.display = 'none'
  inicio()
})

function inicio() {
  let numAleatorio = Math.trunc(Math.random() * palavras.length)  
  palavraSecreta = palavras[numAleatorio]

  for (let y = 0; y < palavraSecreta.length; y++) {
  letras.unshift(' _')
  }

  tracos.innerHTML = letras.join(' ')
  letraDigitada.focus()
  console.log(palavraSecreta)
}

let tem = 0
let naoTem = 0
let erro = 0
let certas = 0
let letra 

letraDigitada.addEventListener('keyup', () => { 
  letra = letraDigitada.value.toLowerCase()
  letrasDigitadas.push(letra.toUpperCase())
  digitadas.innerHTML = letrasDigitadas.join(' - ') 
  tem = 0
  naoTem = 0
  for (let i = 0; i <= palavraSecreta.length; i++) {
    if(palavraSecreta[i] == letra) {
      tem++
      certas++
      letras[i] = palavraSecreta[i]
      tracos.innerHTML = letras.join(' ')
    } 

    if(letra != palavraSecreta[i]) {
      naoTem++
    }
  }
    
    console.log('tem ' + tem)
    console.log('nao tem ' + naoTem)
    console.log('certas ' + certas)
  
  letraDigitada.focus()
  letraDigitada.value = ''

  if(tem == 0 && naoTem != 0) {
    erro++
  }

  console.log(erro)

  if(certas == palavraSecreta.length){
    telaFinal.style.display = 'flex'
    palavra.innerHTML = `A palavra era: <strong>${palavraSecreta}</strong>`
    mensagemFinal.innerHTML = 'VOCÊ ACERTOU!'
    todasDigitadas.innerHTML = `Letras que você digitou: ${letrasDigitadas.join(' ')}`
    cabeca.innerHTML = '&#128526;'
    console.log('acertou')
  }

  if(erro >= 7) {
    telaFinal.style.display = 'flex'
    palavra.innerHTML = `A palavra era: <strong>${palavraSecreta}</strong>`
    mensagemFinal.innerHTML = 'VOCÊ PERDEU!'
    todasDigitadas.innerHTML = `Letras que você digitou: ${letrasDigitadas.join(' - ')}`

  }

  switch(erro) {
    case 1:
      cabeca.style.display = 'block'
      break
    case 2:
      tronco.style.display = 'block'
      cabeca.innerHTML = '&#128552;'
      break
    case 3:
      bracoEsq.style.display = 'block'
      cabeca.innerHTML = '&#128531;'
      break
    case 4:
      bracoDir.style.display = 'block'
      cabeca.innerHTML = '&#128560;'
      break
    case 5:
      pernaEsq.style.display = 'block'
      cabeca.innerHTML = '&#128532;'
      
      break
    case 6:
      pernaDir.style.display = 'block'
      cabeca.innerHTML = '&#128534'
      geraDica()
      break
  }
})

function geraDica() {
  let dica = palavraSecreta.slice(0, 5)
  if(palavraSecreta.length < 7) {
    dica = palavraSecreta.slice(0, 4)
  }
  dicaPalavra.style.display = 'block'
  dicaPalavra.innerHTML = 'Dica: ' + dica + ' *'
}

btnRecomecar.addEventListener('click', () => {
  telaFinal.style.display = 'none'
  dicaPalavra.style.display = 'none'
  numAleatorio = Math.trunc(Math.random() * palavras.length)
  palavraSecreta = palavras[numAleatorio]
  letrasDigitadas = []
  digitadas.innerHTML = ''
  letras = []
  certas = 0
  erro = 0

  for (let y = 0; y < palavraSecreta.length; y++) {
  letras.unshift(' _')
  }

  cabeca.style.display = 'none'
  tronco.style.display = 'none'
  bracoEsq.style.display = 'none'
  bracoDir.style.display = 'none'
  pernaEsq.style.display = 'none'
  pernaDir.style.display = 'none'

  tracos.innerHTML = letras.join(' ')
  letraDigitada.focus()
})

