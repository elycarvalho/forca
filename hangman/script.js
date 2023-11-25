let tracos = document.getElementById('tracos')
let mensagem = document.querySelector('.mensagem')
const digitadas = document.querySelector('.digitadas')
const btnComecar = document.querySelector('.btn-comecar')
const btnRecomecar = document.querySelector('.btn-recomecar')
const telaInicial = document.querySelector('.tela-inicial')
const telaFinal = document.querySelector('.tela-final')
const mensagemFinal = document.querySelector('.mensagem-final')
const todasDigitadas = document.querySelector('.todas-digitadas')
const level = document.querySelector('.level')
const palavra = document.querySelector('.palavra')
const letraDigitada = document.getElementById('letra')
const dicaPalavra = document.querySelector('.dica')
let letrasDigitadas = []

const easy = [
  'water','yellow','happy','morning','evening','night','family','milk',
  'window','mother','father','sister','apple','lemon','orange','flower',
  'english','crush','shopping','brother','table','tablet','color','delete',
  'light','coffee','drink','speak','body','green','school','space','book',
  'money','mouse','ocean','house','play','record','where','want','need',
  'film','walk','stand','card','bank','welcome','thanks','food','lunch',
  'pencil','paper','correct','copy','october','november','sunday','bike','like',
  'child','woman','seven','goodbye','fire','number','band','music','rock','stone',
  'hospital'
]

const normal = [
  'without','memory','language','headache','keyboard','support',
  'palace', 'commerce', 'mistery', 'engineer','building','country',
  'system','refrigerator', 'navigation', 'battery', 'fireman',
  'shampoo', 'outdoor', 'indoor', 'supermarket','android', 'coffee',
  'calendar', 'manager', 'storm','lightning','skeleton', 'forest', 
  'customer','charger', 'message','computer', 'smile', 'password', 'forward',
  'supermarket','romance','business','satisfy','reality','reload','something',
  'anything','function','dictionary','restroom','toilet','store','bottle','flight',
  'halloween','thunder','cellphone','object','default','display','garbage','hand',
  'package','brand'
]

const hard = [
  'comprehension','technology','compilation','fascination','aprehensive',
  'synonym','delusion','internship','employee','constitution','meaningful',
  'development','environment','pollution','deodorant','suffering','certainty','retaliation',
  'requirement','ceiling','impeachment','disregard','recklessness','purposely',
  'deployment','inheritance','flawless','fulfill','achieve','archeologist','commute',
  'departure','unemployment','hypothesis','management','alcoholic'
]

let palavras = []

let palavraSecreta
let letras = []

btnComecar.addEventListener('click', () => {
  telaInicial.style.display = 'none'
  inicio()
})
 
function inicio() {
  switch(level.value) {
    case 'easy':
      palavras = easy
      break
    case 'normal':
      palavras = normal
      break
    case 'hard':
      palavras = hard
  }
  let numAleatorio = Math.trunc(Math.random() * palavras.length)  
  palavraSecreta = palavras[numAleatorio]

  for (let y = 0; y < palavraSecreta.length; y++) {
  letras.unshift(' _')
  }

  tracos.innerHTML = letras.join(' ')
  letraDigitada.focus()
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
    
  letraDigitada.focus()
  letraDigitada.value = ''

  if(tem == 0 && naoTem != 0) {
    erro++
  }

  if(certas == palavraSecreta.length){
    telaFinal.style.display = 'flex'
    palavra.innerHTML = `The secret word was: <strong>${palavraSecreta}</strong>`
    mensagemFinal.innerHTML = 'YOU MADE IT!'
    todasDigitadas.innerHTML = `Letters you typed: ${letrasDigitadas.join(' ')}`
    cabeca.innerHTML = '&#128526;'
  }

  if(erro >= 7) {
    telaFinal.style.display = 'flex'
    palavra.innerHTML = `The secret word was: <strong>${palavraSecreta}</strong>`
    mensagemFinal.innerHTML = 'YOU LOSE!'
    todasDigitadas.innerHTML = `Letter you typed: ${letrasDigitadas.join(' - ')}`
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

