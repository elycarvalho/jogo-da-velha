var caixas = [
  caixa1 = document.getElementById('caixa1'),
  caixa2 = document.getElementById('caixa2'),
  caixa3 = document.getElementById('caixa3'),
  caixa4 = document.getElementById('caixa4'),
  caixa5 = document.getElementById('caixa5'),
  caixa6 = document.getElementById('caixa6'),
  caixa7 = document.getElementById('caixa7'),
  caixa8 = document.getElementById('caixa8'),
  caixa9 = document.getElementById('caixa9')
  ]

const telaInicio = document.getElementById('telaInicio')
const telaFim = document.getElementById('telaFim')
const btnComecar = document.getElementById('btnComecar')
const btnReinicia = document.getElementById('btnReinicia')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const nomePlayer1 = document.getElementById('nomePlayer1')
const nomePlayer2 = document.getElementById('nomePlayer2')
var nomeVencedor = document.getElementById('nomeVencedor')
var empate = 0
var sequencias = [linha1 = '', linha2 = '', linha3 = '',
                  coluna1 = '', coluna2 = '', coluna3 = '',
                  diagonal1 = '', diagonal2 = '']
var jogadorDaVez = 1 
var vencedor

btnComecar.addEventListener('click', () => {
  telaInicio.style.display = 'none'
  player1.innerHTML += nomePlayer1.value
  player2.innerHTML += nomePlayer2.value
})

caixa1.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[0].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[0] = sequencias[0] + 'o'
		sequencias[3] = sequencias[3] + 'o'
		sequencias[6] = sequencias[6] + 'o'
	  } 
	  else if(jogadorDaVez == 2) {
		caixas[0].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[0] = sequencias[0] + 'x'
		sequencias[3] = sequencias[3] + 'x'
		sequencias[6] = sequencias[6] + 'x'
	  } 
	  empate++
	  testaSequencia() 
})

caixa2.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[1].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
    sequencias[0] = sequencias[0] + 'o'
		sequencias[4] = sequencias[4] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[1].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[0] = sequencias[0] + 'x'
		sequencias[4] = sequencias[4] + 'x'
	}
	empate++
	testaSequencia()	
})

caixa3.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[2].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[0] = sequencias[0] + 'o'
		sequencias[5] = sequencias[5] + 'o'
		sequencias[7] = sequencias[7] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[2].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[0] = sequencias[0] + 'x'
		sequencias[5] = sequencias[5] + 'x'
		sequencias[7] = sequencias[7] + 'x'
	}
	empate++
	testaSequencia()
})

caixa4.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[3].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[1] = sequencias[1] + 'o'
		sequencias[3] = sequencias[3] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[3].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[1] = sequencias[1] + 'x'
		sequencias[3] = sequencias[3] + 'x'
	}
	empate++
	testaSequencia()
})

caixa5.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[4].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[1] = sequencias[1] + 'o'
		sequencias[4] = sequencias[4] + 'o'
		sequencias[6] = sequencias[6] + 'o'
		sequencias[7] = sequencias[7] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[4].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[1] = sequencias[1] + 'x'
		sequencias[4] = sequencias[4] + 'x'
		sequencias[6] = sequencias[6] + 'x'
		sequencias[7] = sequencias[7] + 'x'
	}
	empate++
	testaSequencia()
})

caixa6.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[5].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[1] = sequencias[1] + 'o'
		sequencias[5] = sequencias[5] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[5].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[1] = sequencias[1] + 'x'
		sequencias[5] = sequencias[5] + 'x'
	}
	empate++
	testaSequencia()
})

caixa7.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[6].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[2] = sequencias[2] + 'o'
		sequencias[3] = sequencias[3] + 'o'
		sequencias[7] = sequencias[7] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[6].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[2] = sequencias[2] + 'x'
		sequencias[3] = sequencias[3] + 'x'
		sequencias[7] = sequencias[7] + 'x'
	}
	empate++
	testaSequencia()
})

caixa8.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[7].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[2] = sequencias[2] + 'o'
		sequencias[4] = sequencias[4] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[7].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[2] = sequencias[2] + 'x'
		sequencias[4] = sequencias[4] + 'x'
	}
	empate++
	testaSequencia()
})

caixa9.addEventListener('click', () => {
	if(jogadorDaVez == 1) {
		caixas[8].style.backgroundImage = 'url(x.png)'
		jogadorDaVez = 2
		sequencias[2] = sequencias[2] + 'o'
		sequencias[5] = sequencias[5] + 'o'
		sequencias[6] = sequencias[6] + 'o'
	} 
	else if(jogadorDaVez == 2) {
		caixas[8].style.backgroundImage = 'url(bola.png)'
		jogadorDaVez = 1
		sequencias[2] = sequencias[2] + 'x'
		sequencias[5] = sequencias[5] + 'x'
		sequencias[6] = sequencias[6] + 'x'
	}
	empate++
	testaSequencia()
})

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
  } else {checaEmpate()}
}

function final() {
	if(jogadorDaVez == 1) {
		nomeVencedor.innerHTML = nomePlayer1.value + ' venceu!'
		telaFim.style.display = 'flex'
		console.log('1 ganhou')
	}else{
		nomeVencedor.innerHTML = nomePlayer2.value + ' venceu!'
		telaFim.style.display = 'flex'
		console.log('2 ganhou')
	}
}

function checaEmpate() {
  if(empate == 9) {
  	telaFim.style.display = 'flex'
  	nomeVencedor.innerHTML = 'EMPATOU!'
  }
}

btnReinicia.addEventListener('click', () => {
	telaFim.style.display = 'none'
	empate = 0
	player1.innerHTML = 'X :'
  player2.innerHTML = 'O :'
  caixas.forEach(limpaGrade)
  sequencias.forEach(limpaSequencias)
  telaInicio.style.display = 'flex'
})

function limpaGrade(item, index) {
	caixas[index].style.backgroundImage = 'url(blank.png)'
}

function limpaSequencias(item, index) {
	sequencias[index] = ''
}
