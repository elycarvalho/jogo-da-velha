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
var nomeVencedor = document.getElementById('nomeVencedor')

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
		sequencias[0] = sequencias[0] + 'o'
		sequencias[3] = sequencias[3] + 'o'
		sequencias[6] = sequencias[6] + 'o'
	  } 
	  else if(jogadorDaVez == 2) {
		caixa1.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[0] = sequencias[0] + 'x'
		sequencias[3] = sequencias[3] + 'x'
		sequencias[6] = sequencias[6] + 'x'
	  } 
	  testaSequencia()
	  console.log(sequencias[0] + ' ' + sequencias[3] + ' ' + sequencias[6] ) 
})

caixa2.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa2.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
    sequencias[0] = sequencias[0] + 'o'
		sequencias[4] = sequencias[4] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa2.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[0] = sequencias[0] + 'x'
		sequencias[4] = sequencias[4] + 'x'
	}
	testaSequencia()
	console.log(sequencias[0] + ' ' + sequencias[4])
})

caixa3.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa3.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[0] = sequencias[0] + 'o'
		sequencias[5] = sequencias[5] + 'o'
		sequencias[7] = sequencias[7] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa3.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[0] = sequencias[0] + 'x'
		sequencias[5] = sequencias[5] + 'x'
		sequencias[7] = sequencias[7] + 'x'
	}
	testaSequencia()
	console.log(sequencias[0] + ' ' + sequencias[5] + ' ' + sequencias[7] )
})

caixa4.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa4.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[1] = sequencias[1] + 'o'
		sequencias[3] = sequencias[3] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa4.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[1] = sequencias[1] + 'x'
		sequencias[3] = sequencias[3] + 'x'
	}
	testaSequencia()
	console.log(sequencias[1] + ' ' + sequencias[3] )
})

caixa5.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa5.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[1] = sequencias[1] + 'o'
		sequencias[4] = sequencias[4] + 'o'
		sequencias[6] = sequencias[6] + 'o'
		sequencias[7] = sequencias[7] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa5.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[1] = sequencias[1] + 'x'
		sequencias[4] = sequencias[4] + 'x'
		sequencias[6] = sequencias[6] + 'x'
		sequencias[7] = sequencias[7] + 'x'
	}
	testaSequencia()
	console.log(sequencias[1] + ' ' + sequencias[4] + ' ' + sequencias[6] + ' ' + sequencias[7])
})

caixa6.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa6.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[1] = sequencias[1] + 'o'
		sequencias[5] = sequencias[5] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa6.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[1] = sequencias[1] + 'x'
		sequencias[5] = sequencias[5] + 'x'
	}
	testaSequencia()
	console.log(sequencias[1] + ' ' + sequencias[5])
})

caixa7.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa7.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[2] = sequencias[2] + 'o'
		sequencias[3] = sequencias[3] + 'o'
		sequencias[7] = sequencias[7] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa7.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[2] = sequencias[2] + 'x'
		sequencias[3] = sequencias[3] + 'x'
		sequencias[7] = sequencias[7] + 'x'
	}
	testaSequencia()
	console.log(sequencias[2] + ' ' + sequencias[3] + ' ' + sequencias[7])
})

caixa8.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa8.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[2] = sequencias[2] + 'o'
		sequencias[4] = sequencias[4] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa8.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[2] = sequencias[2] + 'x'
		sequencias[4] = sequencias[4] + 'x'
	}
	testaSequencia()
	console.log(sequencias[2] + ' ' + sequencias[4])
})

caixa9.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixa9.style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[2] = sequencias[2] + 'o'
		sequencias[5] = sequencias[5] + 'o'
		sequencias[6] = sequencias[6] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixa9.style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[2] = sequencias[2] + 'x'
		sequencias[5] = sequencias[5] + 'x'
		sequencias[6] = sequencias[6] + 'x'
	}
	testaSequencia()
	console.log(sequencias[2] + ' ' + sequencias[5] + ' ' + sequencias[6] )
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
		nomeVencedor.innerHTML = nomePlayer1.value
		console.log('1 ganhou')
	}else{
		nomeVencedor.innerHTML = nomePlayer2.value
		console.log('2 ganhou')
	}
}
