const caixa1 = document.getElementById('caixa1')
const caixa2 = document.getElementById('caixa2')
const caixa3 = document.getElementById('caixa3')
const caixa4 = document.getElementById('caixa4')
const caixa5 = document.getElementById('caixa5')
const caixa6 = document.getElementById('caixa6')
const caixa7 = document.getElementById('caixa7')
const caixa8 = document.getElementById('caixa8')
const caixa9 = document.getElementById('caixa9')
const telaInicio = document.getElementById('telaInicio')
const telaFim = document.getElementById('telaFim')
const btnComecar = document.getElementById('btnComecar')
const btnReinicia = document.getElementById('btnReinicia')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const nomePlayer1 = document.getElementById('nomePlayer1')
const nomePlayer2 = document.getElementById('nomePlayer2')

var sequencias = [linha1 = '', linha2 = '', linha3 = '',
                  coluna1 = '', coluna2 = '', coluna3 = '',
                  diagonal1 = '', diagonal2 = '']

/*
var linha1 = ''
var linha2 = ''
var linha3 = ''
var coluna1 = ''
var coluna2 = ''
var coluna3 = ''
var diagonal1 = '' 
var diagonal2 = ''
*/

//var sequencia = ['123', '456', '789', '147', '258', '369', '159', '357']
var jogadorDaVez = 1 
var vencedor

btnComecar.addEventListener('click', () => {
  telaInicio.style.display = 'none'
  player1.innerHTML = nomePlayer1.value
  player2.innerHTML = nomePlayer2.value
})

caixa1.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa1.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha1 = linha1 + 'o'
		coluna1 = coluna1 + 'o'
		diagonal1 = diagonal1 + 'o'
	  } 
	  else if(jogadorDaVez == 2) {
		caixa1.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha1 = linha1 + 'x'
		coluna1 = coluna1 + 'x'
		diagonal1 = diagonal1 + 'x'
	  } 
	  testaSequencia()
	  console.log(linha1 + ' ' + coluna1 + ' ' + diagonal1 ) 
})

caixa2.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa2.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
    linha1 = linha1 + 'o'
		coluna2 = coluna2 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa2.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha1 = linha1 + 'x'
		coluna2 = coluna2 + 'x'
	}
	testaSequencia()
	console.log(linha1 + ' ' + coluna2)
})

caixa3.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa3.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha1 = linha1 + 'o'
		coluna3 = coluna3 + 'o'
		diagonal2 = diagonal2 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa3.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha1 = linha1 + 'x'
		coluna3 = coluna3 + 'x'
		diagonal2 = diagonal2 + 'x'
	}
	testaSequencia()
	console.log(linha1 + ' ' + coluna3 + ' ' + diagonal2 )
})

caixa4.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa4.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha2 = linha2 + 'o'
		coluna1 = coluna1 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa4.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha2 = linha2 + 'x'
		coluna1 = coluna1 + 'x'
	}
	testaSequencia()
	console.log(linha2 + ' ' + coluna1 )
})

caixa5.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa5.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha2 = linha2 + 'o'
		coluna2 = coluna2 + 'o'
		diagonal1 = diagonal1 + 'o'
		diagonal2 = diagonal2 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa5.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha2 = linha2 + 'x'
		coluna2 = coluna2 + 'x'
		diagonal1 = diagonal1 + 'x'
		diagonal2 = diagonal2 + 'x'
	}
	testaSequencia()
	console.log(linha2 + ' ' + coluna2 + ' ' + diagonal1 + ' ' + diagonal2)
})

caixa6.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa6.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha2 = linha2 + 'o'
		coluna3 = coluna3 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa6.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha2 = linha2 + 'x'
		coluna3 = coluna3 + 'x'
	}
	testaSequencia()
	console.log(linha2 + ' ' + coluna3)
})

caixa7.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa7.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha3 = linha3 + 'o'
		coluna1 = coluna1 + 'o'
		diagonal2 = diagonal2 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa7.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha3 = linha3 + 'x'
		coluna1 = coluna1 + 'x'
		diagonal2 = diagonal2 + 'x'
	}
	testaSequencia()
	console.log(linha3 + ' ' + coluna1 + ' ' + diagonal2)
})

caixa8.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa8.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha3 = linha3 + 'o'
		coluna2 = coluna2 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa8.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha3 = linha3 + 'x'
		coluna2 = coluna2 + 'x'
	}
	testaSequencia()
	console.log(linha3 + ' ' + coluna2)
})

caixa9.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa9.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		linha3 = linha3 + 'o'
		coluna3 = coluna3 + 'o'
		diagonal1 = diagonal1 + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa9.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		linha3 = linha3 + 'x'
		coluna3 = coluna3 + 'x'
		diagonal1 = diagonal1 + 'x'
	}
	testaSequencia()
	console.log(linha3 + ' ' + coluna3 + ' ' + diagonal1 )
})

/*
function testaSequencia() {
  if(linha1    == 'xxx' || linha1    == 'ooo' ||
  	 linha2    == 'xxx' || linha2    == 'ooo' ||
     linha3    == 'xxx' || linha3    == 'ooo' || 
     coluna1   == 'xxx' || coluna1   == 'ooo' ||
     coluna2   == 'xxx' || coluna2   == 'ooo' ||
     coluna3   == 'xxx' || coluna3   == 'ooo' ||
     diagonal1 == 'xxx' || diagonal1 == 'ooo' ||
     diagonal2 == 'xxx' || diagonal2 == 'ooo') {
    final()
    }
}
*/

function testaSequencia() {
  if(sequencias[0] == 'xxx' || sequencias[0] == 'ooo' ||
  	 sequencias[1] == 'xxx' || sequencias[1] == 'ooo' ||
     sequencias[2] == 'xxx' || sequencias[2] == 'ooo' || 
     sequencias[3] == 'xxx' || sequencias[3] == 'ooo' ||
     sequencias[4] == 'xxx' || sequencias[4] == 'ooo' ||
     sequencias[5] == 'xxx' || sequencias[5] == 'ooo' ||
     sequencias[6] == 'xxx' || sequencias[6] == 'ooo' ||
     sequencias[7] == 'xxx' || sequencias[7] == 'ooo') {
    final()
    }
}

function final() {
	if(jogadorDaVez == 1) {
		vencedor.innerHTML = nomePlayer1
		console.log('1 ganhou')
	} else {
		vencedor.innerHTML = nomePlayer2
		console.log('2 ganhou')
	}
}
