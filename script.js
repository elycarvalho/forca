let tracos = document.getElementById('tracos')
let mensagem = document.querySelector('.mensagem')
let letrasDigitadas = []
const digitadas = document.querySelector('.digitadas')
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
  'equipe', 'novato', 'certeza', 'humor', 'costela'
]

let palavraSecreta
const letraDigitada = document.getElementById('letra')
let i = 0
let letras = []

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

inicio()

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
    mensagem.innerHTML = 'VOCÊ ACERTOU!'
    cabeca.innerHTML = '&#128526;'
    console.log('acertou')
  }

  if(erro >= 6) {
    mensagem.innerHTML = `VOCÊ PERDEU!<br /> A palavra era: ${palavraSecreta.toUpperCase()}`
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
      break
  }
})

/* emojis
&#128517; sorriso de alivio
&#128521; piscada
128531 suando frio
128552 com medo
128560 suando frio boca aberta
128543 preocupado
128553 cansado
128526 sorriso com oculos escuros
*/