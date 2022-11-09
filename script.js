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
  'ônibus', 'espacial', 'oceano', 'brasileiro'
] 
    let palavraSecreta
    const btnVerifica = document.getElementById('btnVerifica')
    const letraDigitada = document.getElementById('letra')
    let i = 0
    let letras = []
    //console.log(palavras)
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
    let tem2 = 0
    let naoTem
    let naoTem2 = 0

    btnVerifica.addEventListener('click', () => {  
      for (let i = 0; i <= palavraSecreta.length; i++) {
        if(palavraSecreta[i] === letraDigitada.value) {
          tem++
          letras[i] = palavraSecreta[i]
          tracos.innerHTML = letras.join(' ')
        } else {naoTem = 'n'}
      }
      tem2 =+ tem 
      //if(tem === 0) {naoTem++}
      if(tem2 === palavraSecreta.length){console.log('acertou')}
      if(naoTem === 'n'){naoTem2++}
      if(naoTem2 >= (palavraSecreta.length - 3)) {console.log('*PERDEU*')}
      letraDigitada.value = ''
      letraDigitada.focus()
      console.log('tem:' + tem)
      console.log('nao tem:' + naoTem)
      console.log('nao tem2:' + naoTem2)
      console.log('tem2:' + tem2)  
    })
    