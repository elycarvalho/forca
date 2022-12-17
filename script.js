let tracos = document.getElementById('tracos')
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
  'coleira', 'caveira', 'madeira', 'jardineiro', 'escanteio'
]

let palavraSecreta
//const btnVerifica = document.getElementById('btnVerifica')
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

letraDigitada.addEventListener('keyup', () => {  
  tem = 0
  naoTem = 0
  for (let i = 0; i <= palavraSecreta.length; i++) {
    if(palavraSecreta[i] == letraDigitada.value) {
      tem++
      letras[i] = palavraSecreta[i]
      tracos.innerHTML = letras.join(' ')
    } 

    if(letraDigitada.value != palavraSecreta[i]) {
      naoTem++
    }
  }
    
    console.log('tem ' + tem)
    console.log('nao tem ' + naoTem)
  
  
  //console.log(tem)
  letraDigitada.focus()
  letraDigitada.value = ''

  if(tem == 0 && naoTem != 0) {
    erro++
  }

  console.log(erro)

  if(tem == palavraSecreta.length){
    console.log('acertou')
  }


  if(erro >= 6) {
    console.log('*PERDEU*')
  }

  switch(erro) {
    case 1:
      cabeca.style.display = 'block'
      break
    case 2:
      tronco.style.display = 'block'
      break
    case 3:
      bracoEsq.style.display = 'block'
      break
    case 4:
      bracoDir.style.display = 'block'
      break
    case 5:
      pernaEsq.style.display = 'block'
      break
    case 6:
      pernaDir.style.display = 'block'
      break
  }
})