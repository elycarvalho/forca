let tracos = document.getElementById('tracos')
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

const easy_level = [
  {word:'water',tip:'h2o'},{word:'yellow',tip:'color'},{word:'happy',tip:'glad'},{word:'morning',tip:'before noon'},{word:'evening',tip:'night'},
  {word:'night',tip:'evening'},{word:'family',tip:'parents and sibilings'},{word:'milk',tip:'cow'},
  {word:'window',tip:'open the w...'},{word:'mother',tip:'father'},{word:'father',tip:'mother'},{word:'sister',tip:'brother'},
  {word:'apple',tip:'iphone'},{word:'lemon',tip:'citric fruit'},{word:'orange',tip:'citric fruit'},{word:'flower',tip:'roses'},{word:'english',tip:'language'},
  {word:'crush',tip:'squeeze, press'},{word:'shopping',tip:'buy things'},{word:'brother',tip:'sister'},{word:'table',tip:'chair'},{word:'tablet',tip:'ipad'},{word:'color',tip:'rainbow'},{word:'delete',tip:'erase'},
  {word:'light',tip:'illumination'},{word:'coffee',tip:'keeps you awake'},{word:'drink',tip:'water, coffee, wine...'},{word:'speak',tip:'say, talk'},{word:'body',tip:'everyb_ _ _'},{word:'green',tip:'color'},{word:'school',tip:'students'},{word:'space',tip:'universe'},{word:'book',tip:'library'},
  {word:'money',tip:'cash'},{word:'mouse',tip:'rat'},{word:'ocean',tip:'sea'},{word:'house',tip:'home'},{word:'play',tip:"let's p_ _ _"},{word:'record',tip:'register, registry'},{word:'where',tip:'in what place?'},{word:'want',tip:'desire, wish'},{word:'need',tip:'necessity'},
  {word:'film',tip:'movie'},{word:'walk',tip:'go, move, march'},{word:'stand',tip:'get up'},{word:'card',tip:'credit or debit'},{word:'bank',tip:'save money'},{word:'welcome',tip:'greeting, reception'},{word:'thanks',tip:'gratitude'},{word:'food',tip:'meal'},{word:'lunch',tip:'dinner, breakfast...'},
  {word:'pencil',tip:'pen'},{word:'paper',tip:'document'},{word:'correct',tip:'right'},{word:'copy',tip:'replica'},{word:'october',tip:'after september'},{word:'november',tip:'eleventh month'},{word:'sunday',tip:'day of the week'},{word:'bike',tip:'bicycle'},{word:'like',tip:'to enjoy'},
  {word:'child',tip:'kid'},{word:'woman',tip:'man'},{word:'seven',tip:'a number'},{word:'goodbye',tip:'bye bye, farewell'},{word:'fire',tip:'flame,blaze,burn'},{word:'number',tip:'1,2,3...'},{word:'band',tip:'plays music'},{word:'music',tip:'song'},{word:'rock',tip:'stone,music style'},{word:'stone',tip:'rock, pebble'},
  {word:'hospital',tip:'place to treat pacients'},{word:'elephant',tip:'big animal'},{word:'butterfly',tip:'insect, beautiful wings'},{word:'power',tip:'force, energy'},{word:'unicorn',tip:'horse with horn'},{word:'restaurant',tip:'a place to eat'},{word:'horse',tip:'animal, people ride on it'}
]

const normal_level = [
  {word:'without',tip:'antonym of with'},{word:'memory',tip:'something recorded'},{word:'language',tip:'portuguese, english...'},{word:'headache',tip:'pain in the head'},{word:'keyboard',tip:'used to type'},{word:'support',tip:'help, aid, assistance'},
  {word:'palace',tip:"king's house"},{word:'commerce',tip:'buy and sell'},{word:'mistery',tip:'secret, enigma'},{word:'engineer',tip:'designer,builder'},{word:'building',tip:'construction'},{word:'country',tip:'nation'},
  {word:'system'},{word:'refrigerator'},{word:'navigation'},{word:'battery'},{word:'firefighter'},
  {word:'shampoo',tip:'wash the hair'},{word:'outdoor',tip:'indoor'},{word:'indoor',tip:'outdoor'},{word:'supermarket'},{word:'android'},{word:'coffee'},
  {word:'calendar',tip:'days, weeks, month...'},{word:'manager',tip:'administrator'},{word:'storm',tip:'heavy rain'},{word:'lightning',tip:'flash in the sky'},{word:'skeleton',tip:'bones'},{word:'forest',tip:'woods, jungle'}, 
  {word:'customer',tip:'client,buyer,shopper'},{word:'charger',tip:'recharge battery'},{word:'message',tip:'text,chat,SMS'},{word:'computer',tip:'laptop'},{word:'smile',tip:'happy face'},{word:'password',tip:'code,PIN,secret'},{word:'forward',tip:'ahead,advancing'},
  {word:'supermarket',tip:'sell things'},{word:'romance',tip:'love'},{word:'business',tip:'market, commerce'},{word:'satisfy',tip:'fulfill, make happy'},{word:'reality',tip:'real world, truth'},{word:'reload',tip:'load again'},{word:'something',tip:'anything, nothing'},
  {word:'anything',tip:'nothing, something'},{word:'function',tip:'task, purpose'},{word:'dictionary',tip:'wordbook, vocabulary'},{word:'restroom',tip:'toilet, bathroom'},{word:'toilet',tip:'restroom, bathroom'},{word:'store',tip:'shop'},{word:'bottle',tip:'liquid container'},{word:'flight',tip:'flying, aviation'},
  {word:'halloween',tip:'"trick or treat"'},{word:'thunder',tip:'noise after a lightning'},{word:'cellphone',tip:'mobile phone'},{word:'object',tip:'thing, item'},{word:'default',tip:'automatically selected'},{word:'display',tip:'show, screen'},{word:'garbage',tip:'trash, waste'},{word:'hand',tip:'fingers, fist'},
  {word:'package',tip:'lot, collection'},{word:'brand',tip:'trademark'},{word:'phantom',tip:'ghost, spirit'},{word:'awesome',tip:'amazing, astonishing'},{word:'marriage',tip:'wedding, matrimony'},{word:'territory',tip:'region, dominion'},{word:'horseshoe',tip:'horses wear it'},
  {word:'similar',tip:'almost identical'},{word:'darkness',tip:'the absense of light'}
]

const hard_level = [
  {word:'comprehension',tip:'understanding'},{word:'technology',tip:'scientific knowledge'},{word:'compilation',tip:'collection, gathering'},{word:'fascination',tip:'interest, obsession'},{word:'apprehensive',tip:'worried, anxious'},
  {word:'synonym',tip:'same meaning'},{word:'delusion',tip:'false impression'},{word:'internship',tip:'the intern does'},{word:'employee',tip:'worker'},{word:'constitution',tip:'social code'},{word:'meaningful',tip:'significant'},
  {word:'development',tip:'evolution, invention, growth'},{word:'environment',tip:'nature, ecosystem'},{word:'pollution',tip:'it destroys the environment'},{word:'deodorant',tip:'prevent body odor'},{word:'suffering',tip:'pain, sorrow'},{word:'certainty',tip:'conviction, sureness'},{word:'retaliation',tip:'revenge, vengeance'},
  {word:'requirement',tip:'need, demand'},{word:'ceiling',tip:'roof'},{word:'disregard',tip:'ignore, indifference'},{word:'purposely',tip:'on purpose'},{word:'sharpener',tip:'used for sharpening'},
  {word:'inheritance',tip:'legacy, heritage'},{word:'flawless',tip:'perfect'},{word:'fulfill',tip:'succeed in, satisfy'},{word:'achieve',tip:'reach, accomplish'},{word:'commute',tip:'travel to work'},
  {word:'departure',tip:'arrival'},{word:'measurement',tip:'quantification, mensuration'},{word:'hypothesis',tip:'theory, speculation'},{word:'management',tip:"manager's work"},{word:'alcoholic',tip:'addicted to alcohol'},
  {word:'award',tip:'prize, trophy'},{word:'ordinary',tip:'normal, common'},{word:'establish',tip:'put in place, build, start'},{word:'agreement',tip:'accordance, consensus'},{word:'methodology',tip:'a system of methods'}
]

let palavras = []

let palavraSecreta
let dica
let letras = []

btnComecar.addEventListener('click', () => {
  telaInicial.style.display = 'none'
  inicio()
})
 
function inicio() {
  switch(level.value) {
    case 'easy':
      palavras = easy_level
      break
    case 'normal':
      palavras = normal_level
      break
    case 'hard':
      palavras = hard_level
  }
  let numAleatorio = Math.trunc(Math.random() * palavras.length)  
  palavraSecreta = palavras[numAleatorio].word
  dica = palavras[numAleatorio].tip

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
   //verifica se a letra ja foi digitada
  for (let i = 0; i <= letrasDigitadas.length; i++) {
    if(letra.toUpperCase() == letrasDigitadas[i]){
      alert('This letter was typed already! Try another letter.')
      letra = ''
      letraDigitada.focus()
      erro-- 
    }
  }

  if(letra != ''){letrasDigitadas.push(letra.toUpperCase())}
 
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
    palavra.innerHTML = `The word was: <strong>${palavraSecreta}</strong>`
    mensagemFinal.innerHTML = '&#127881; YOU MADE IT! &#127881;'
    todasDigitadas.innerHTML = `Letters you typed: ${letrasDigitadas.join(' - ')}`
    cabeca.innerHTML = '&#128526;'
  }

  if(erro >= 7) {
    telaFinal.style.display = 'flex'
    palavra.innerHTML = `The word was: <strong>${palavraSecreta}</strong>`
    mensagemFinal.innerHTML = 'YOU LOSE! &#128546;'
    todasDigitadas.innerHTML = `Letters you typed: ${letrasDigitadas.join(' - ')}`
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
  dicaPalavra.style.display = 'block'
  dicaPalavra.innerHTML = 'Tip: ' + dica
}

btnRecomecar.addEventListener('click', () => {
  telaFinal.style.display = 'none'
  dicaPalavra.style.display = 'none'
  numAleatorio = Math.trunc(Math.random() * palavras.length)
  palavraSecreta = palavras[numAleatorio].word
  dica = palavras[numAleatorio].tip
  
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

