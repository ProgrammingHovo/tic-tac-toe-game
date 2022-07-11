const buttonX = document.querySelector('.button-x')
const buttonO = document.querySelector('.button-o')
const startHidden = document.querySelector('.start')
const board = document.querySelector('.board')
const cellElements = document.querySelectorAll('[data-cell]')
const valueTurn = document.querySelector('[data-valueTurn]')
const winMessageText = document.querySelector('.win-text')
const winMessage = document.querySelector('.win')
const restartButton = document.querySelector('.restart-button')
const turnBackground = document.querySelector('.turn-background-color')
const boardAndTurn = document.querySelector('.board-and-turn')
const whoTurn = document.querySelector('.who-turn')
const turnXText = document.querySelector('.x-turn')
const turnOText = document.querySelector('.o-turn')
const cell1 = document.querySelector('.cell-1')
const cell2 = document.querySelector('.cell-2')
const cell3 = document.querySelector('.cell-3')
const cell4 = document.querySelector('.cell-4')
const cell5 = document.querySelector('.cell-5')
const cell6 = document.querySelector('.cell-6')
const cell7 = document.querySelector('.cell-7')
const cell8 = document.querySelector('.cell-8')
const cell9 = document.querySelector('.cell-9')
const winCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

// buttonX.onclick = clickedX
// buttonO.onclick = clickedO

window.onclick = () => {
		buttonO.classList.remove('bottonActive')
	 	buttonX.classList.remove('bottonActive')
	 	cell1.classList.remove('isActive')
		cell2.classList.remove('isActive')
		cell3.classList.remove('isActive')
		cell4.classList.remove('isActive')
		cell5.classList.remove('isActive')
		cell6.classList.remove('isActive')
		cell7.classList.remove('isActive')
		cell8.classList.remove('isActive')
		cell9.classList.remove('isActive')
		restartButton.classList.remove('isActiveRestartButton')
	}

buttonX.onclick = () => {
		buttonO.classList.remove('bottonActive')
	 	buttonX.classList.remove('bottonActive')
	 	clickedX()
	}

buttonO.onclick = () => {
		buttonO.classList.remove('bottonActive')
	 	buttonX.classList.remove('bottonActive')
	 	clickedO()
	}



window.onkeydown = clickedCtrl

function restartButtonActiveAgain() {
	window.addEventListener('keydown', clickedCtrl)
}

function clickedCtrl(e) {
		//to make the buttons active
	if(e.keyCode === 17 && buttonX.classList.contains('bottonActive') == false && buttonO.classList.contains('bottonActive') == false) {
		buttonX.classList.add('bottonActive')
		document.querySelector('.pressCtrlText').innerText = 'Press spacebar to play'
	} 
		//turn buttons activing with keys	
	else if(e.keyCode === 37 && buttonX.classList.contains('bottonActive')) {
		buttonX.classList.remove('bottonActive')
		buttonO.classList.add('bottonActive')
	} else if(e.keyCode === 39 && buttonX.classList.contains('bottonActive')) {
		buttonX.classList.remove('bottonActive')
		buttonO.classList.add('bottonActive')
	} else if(e.keyCode === 37 && buttonO.classList.contains('bottonActive')) {
		buttonO.classList.remove('bottonActive')
		buttonX.classList.add('bottonActive')
	} else if(e.keyCode === 39 && buttonO.classList.contains('bottonActive')) {
		buttonO.classList.remove('bottonActive')
		buttonX.classList.add('bottonActive')
	} else if(e.keyCode === 38 && buttonX.classList.contains('bottonActive') || 
		e.keyCode === 40 && buttonX.classList.contains('bottonActive')) {

		buttonX.classList.add('bottonActive')
	} else if(e.keyCode === 38 && buttonO.classList.contains('bottonActive') || 
		e.keyCode === 40 && buttonO.classList.contains('bottonActive')) {
		
		buttonO.classList.add('bottonActive')
	}

		//press button with enter		
	 else if(buttonX.classList.contains('bottonActive') && e.keyCode === 32 && startHidden.style.display !== 'none') {
		clickedX()	
	} else if(buttonO.classList.contains('bottonActive') && e.keyCode === 32 && startHidden.style.display !== 'none') {
		clickedO()
	} 
		//remove button activing
	else if(e.keyCode === 17 && buttonX.classList.contains('bottonActive') || e.keyCode === 17 && buttonO.classList.contains('bottonActive')) {
	 	buttonO.classList.remove('bottonActive')
	 	buttonX.classList.remove('bottonActive')
	 	document.querySelector('.pressCtrlText').innerText = 'Press ctrl to choose with keyboard'
	}

	console.log(e)
}


function clickedX() {
	startHidden.style.display = 'none'
	boardAndTurn.style.display = 'flex'
	board.classList.add('x-hover')
	valueTurn.classList.add('x')
	cellElements.forEach(cell => {
	cell.addEventListener('click', handleClick, {once: true})
})

	if(valueTurn.classList.contains('x')) {
		turnBackground.style.display = 'flex'
		turnXText.style.color = 'black'
	}
	turnWithKeys()

	if(buttonX.classList.contains('bottonActive') || buttonO.classList.contains('bottonActive')) {
		document.querySelector('.cell-1').classList.add('isActive')
	}
}


function clickedO() {
	startHidden.style.display = 'none'
	boardAndTurn.style.display = 'flex'
	board.classList.add('o-hover')
	valueTurn.classList.add('o')
	cellElements.forEach(cell => {
	cell.addEventListener('click', handleClick, {once: true})
})
	if(valueTurn.classList.contains('o')) {
		turnBackground.style.display = 'flex'
		turnBackground.style.left = '147px'
		turnOText.style.color = 'black'
	}
	turnWithKeys()

	if(buttonX.classList.contains('bottonActive') || buttonO.classList.contains('bottonActive')) {
		document.querySelector('.cell-1').classList.add('isActive')}
}


function turnWithKeys() {
	window.onkeydown = (e) => {
	
			//cell 1
		if (e.keyCode === 37 && cell1.classList.contains('isActive')) {
			cell1.classList.remove('isActive')
			cell3.classList.add('isActive')
		} else if(e.keyCode === 39 && cell1.classList.contains('isActive')) {
			cell1.classList.remove('isActive')
			cell2.classList.add('isActive')
		} else if(e.keyCode === 38 && cell1.classList.contains('isActive')) {
			cell1.classList.remove('isActive')
			cell7.classList.add('isActive')
		} else if(e.keyCode === 40 && cell1.classList.contains('isActive')) {
			cell1.classList.remove('isActive')
			cell4.classList.add('isActive')
		} 
			//cell 2 
		 else if(e.keyCode === 37 && cell2.classList.contains('isActive')) {
			cell2.classList.remove('isActive')
			cell1.classList.add('isActive')
		} else if(e.keyCode === 39 && cell2.classList.contains('isActive')) {
			cell2.classList.remove('isActive')
			cell3.classList.add('isActive')
		} else if(e.keyCode === 38 && cell2.classList.contains('isActive')) {
			cell2.classList.remove('isActive')
			cell8.classList.add('isActive')
		} else if(e.keyCode === 40 && cell2.classList.contains('isActive')) {
			cell2.classList.remove('isActive')
			cell5.classList.add('isActive')
		} 
			//cell 3
		 else if(e.keyCode === 37 && cell3.classList.contains('isActive')) {
			cell3.classList.remove('isActive')
			cell2.classList.add('isActive')
		} else if(e.keyCode === 39 && cell3.classList.contains('isActive')) {
			cell3.classList.remove('isActive')
			cell1.classList.add('isActive')
		} else if(e.keyCode === 38 && cell3.classList.contains('isActive')) {
			cell3.classList.remove('isActive')
			cell9.classList.add('isActive')
		} else if(e.keyCode === 40 && cell3.classList.contains('isActive')) {
			cell3.classList.remove('isActive')
			cell6.classList.add('isActive')
		} 
			//cell 4
		 else if(e.keyCode === 37 && cell4.classList.contains('isActive')) {
			cell4.classList.remove('isActive')
			cell6.classList.add('isActive')
		} else if(e.keyCode === 39 && cell4.classList.contains('isActive')) {
			cell4.classList.remove('isActive')
			cell5.classList.add('isActive')
		} else if(e.keyCode === 38 && cell4.classList.contains('isActive')) {
			cell4.classList.remove('isActive')
			cell1.classList.add('isActive')
		} else if(e.keyCode === 40 && cell4.classList.contains('isActive')) {
			cell4.classList.remove('isActive')
			cell7.classList.add('isActive')
		}
			//cell 5
		 else if(e.keyCode === 37 && cell5.classList.contains('isActive')) {
			cell5.classList.remove('isActive')
			cell4.classList.add('isActive')
		} else if(e.keyCode === 39 && cell5.classList.contains('isActive')) {
			cell5.classList.remove('isActive')
			cell6.classList.add('isActive')
		} else if(e.keyCode === 38 && cell5.classList.contains('isActive')) {
			cell5.classList.remove('isActive')
			cell2.classList.add('isActive')
		} else if(e.keyCode === 40 && cell5.classList.contains('isActive')) {
			cell5.classList.remove('isActive')
			cell8.classList.add('isActive')
		}
			//cell 6
		 else if(e.keyCode === 37 && cell6.classList.contains('isActive')) {
			cell6.classList.remove('isActive')
			cell5.classList.add('isActive')
		} else if(e.keyCode === 39 && cell6.classList.contains('isActive')) {
			cell6.classList.remove('isActive')
			cell4.classList.add('isActive')
		} else if(e.keyCode === 38 && cell6.classList.contains('isActive')) {
			cell6.classList.remove('isActive')
			cell3.classList.add('isActive')
		} else if(e.keyCode === 40 && cell6.classList.contains('isActive')) {
			cell6.classList.remove('isActive')
			cell9.classList.add('isActive')
		}
			//cell 7
		 else if(e.keyCode === 37 && cell7.classList.contains('isActive')) {
			cell7.classList.remove('isActive')
			cell9.classList.add('isActive')
		} else if(e.keyCode === 39 && cell7.classList.contains('isActive')) {
			cell7.classList.remove('isActive')
			cell8.classList.add('isActive')
		} else if(e.keyCode === 38 && cell7.classList.contains('isActive')) {
			cell7.classList.remove('isActive')
			cell4.classList.add('isActive')
		} else if(e.keyCode === 40 && cell7.classList.contains('isActive')) {
			cell7.classList.remove('isActive')
			cell1.classList.add('isActive')
		}
			//cell 8
		 else if(e.keyCode === 37 && cell8.classList.contains('isActive')) {
			cell8.classList.remove('isActive')
			cell7.classList.add('isActive')
		} else if(e.keyCode === 39 && cell8.classList.contains('isActive')) {
			cell8.classList.remove('isActive')
			cell9.classList.add('isActive')
		} else if(e.keyCode === 38 && cell8.classList.contains('isActive')) {
			cell8.classList.remove('isActive')
			cell5.classList.add('isActive')
		} else if(e.keyCode === 40 && cell8.classList.contains('isActive')) {
			cell8.classList.remove('isActive')
			cell2.classList.add('isActive')
		}
			//cell 9
		 else if(e.keyCode === 37 && cell9.classList.contains('isActive')) {
			cell9.classList.remove('isActive')
			cell8.classList.add('isActive')
		} else if(e.keyCode === 39 && cell9.classList.contains('isActive')) {
			cell9.classList.remove('isActive')
			cell7.classList.add('isActive')
		} else if(e.keyCode === 38 && cell9.classList.contains('isActive')) {
			cell9.classList.remove('isActive')
			cell6.classList.add('isActive')
		} else if(e.keyCode === 40 && cell9.classList.contains('isActive')) {
			cell9.classList.remove('isActive')
			cell3.classList.add('isActive')


			//select with key cell1
		} else if(e.keyCode === 13 && cell1.classList.contains('isActive') && 
				valueTurn.classList.contains('x') && cell1.classList.contains('x') == false && cell1.classList.contains('o') == false) {
			cell1.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
			// cell1.classList.remove('isActive')
		} else if(e.keyCode === 13 && cell1.classList.contains('isActive') &&
				 valueTurn.classList.contains('o') && cell1.classList.contains('x') == false && cell1.classList.contains('o') == false) {
			cell1.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
			// cell1.classList.remove('isActive')
		} 

			//select with key cell2
		 else if(e.keyCode === 13 && cell2.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell2.classList.contains('x') == false && cell2.classList.contains('o') == false) {
			cell2.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell2.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell2.classList.contains('x') == false && cell2.classList.contains('o') == false) {
			cell2.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

			//select with key cell3
		 else if(e.keyCode === 13 && cell3.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell3.classList.contains('x') == false && cell3.classList.contains('o') == false) {
			cell3.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell3.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell3.classList.contains('x') == false && cell3.classList.contains('o') == false) {
			cell3.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

			//select with key cell4
		 else if(e.keyCode === 13 && cell4.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell4.classList.contains('x') == false && cell4.classList.contains('o') == false) {
			cell4.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell4.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell4.classList.contains('x') == false && cell4.classList.contains('o') == false) {
			cell4.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

			//select with key cell5
		 else if(e.keyCode === 13 && cell5.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell5.classList.contains('x') == false && cell5.classList.contains('o') == false) {
			cell5.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell5.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell5.classList.contains('x') == false && cell5.classList.contains('o') == false) {
			cell5.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

			//select with key cell6
		 else if(e.keyCode === 13 && cell6.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell6.classList.contains('x') == false && cell6.classList.contains('o') == false) {
			cell6.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell6.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell6.classList.contains('x') == false && cell6.classList.contains('o') == false) {
			cell6.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

			//select with key cell7
		 else if(e.keyCode === 13 && cell7.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell7.classList.contains('x') == false && cell7.classList.contains('o') == false) {
			cell7.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell7.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell7.classList.contains('x') == false && cell7.classList.contains('o') == false) {
			cell7.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

			//select with key cell8
		 else if(e.keyCode === 13 && cell8.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell8.classList.contains('x') == false && cell8.classList.contains('o') == false) {
			cell8.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell8.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell8.classList.contains('x') == false && cell8.classList.contains('o') == false) {
			cell8.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

			//select with key cell9
		 else if(e.keyCode === 13 && cell9.classList.contains('isActive') && valueTurn.classList.contains('x') && 
		 		cell9.classList.contains('x') == false && cell9.classList.contains('o') == false) {
			cell9.classList.add('x')
			valueTurn.classList = 'o'
			turnBackground.style.left = '147px'
			turnXText.style.color = 'white'
			turnOText.style.color = 'black'
			board.classList.add('o-hover')
			board.classList.remove('x-hover')
		} else if(e.keyCode === 13 && cell9.classList.contains('isActive') && valueTurn.classList.contains('o') && 
				cell9.classList.contains('x') == false && cell9.classList.contains('o') == false) {
			cell9.classList.add('o')
			valueTurn.classList = 'x'
			turnBackground.style.left = '0'
			turnXText.style.color = 'black'
			turnOText.style.color = 'white'
			board.classList.add('x-hover')
			board.classList.remove('o-hover')
		} 

		//remove activing of the cells
		else if(e.keyCode === 17 && cell1.classList.contains('isActive') && winMessage.style.display !== "flex" || 
				e.keyCode === 17 && cell2.classList.contains('isActive') && winMessage.style.display !== "flex" || 
				e.keyCode === 17 && cell3.classList.contains('isActive') && winMessage.style.display !== "flex" || 
				e.keyCode === 17 && cell4.classList.contains('isActive') && winMessage.style.display !== "flex" || 
				e.keyCode === 17 && cell5.classList.contains('isActive') && winMessage.style.display !== "flex" || 
				e.keyCode === 17 && cell6.classList.contains('isActive') && winMessage.style.display !== "flex" || 
				e.keyCode === 17 && cell7.classList.contains('isActive') && winMessage.style.display !== "flex" || 
				e.keyCode === 17 && cell8.classList.contains('isActive') && winMessage.style.display !== "flex" ||
				e.keyCode === 17 && cell9.classList.contains('isActive') && winMessage.style.display !== "flex") {

			cell1.classList.remove('isActive')
			cell2.classList.remove('isActive')
			cell3.classList.remove('isActive')
			cell4.classList.remove('isActive')
			cell5.classList.remove('isActive')
			cell6.classList.remove('isActive')
			cell7.classList.remove('isActive')
			cell8.classList.remove('isActive')
			cell9.classList.remove('isActive')
		} else if(e.keyCode === 17 && cell1.classList.contains('isActive') == false && cell2.classList.contains('isActive') == false && 
				cell3.classList.contains('isActive') == false && cell4.classList.contains('isActive') == false && cell5.classList.contains('isActive') == false && 
				cell6.classList.contains('isActive') == false && cell7.classList.contains('isActive') == false && cell8.classList.contains('isActive') == false &&
				cell9.classList.contains('isActive') == false && winMessage.style.display !== "flex" && e.keyCode !== 32) {

			cell1.classList.add('isActive')
		} 


	const currentClass = valueTurn.classList

	if(checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	}


	}
}


function handleClick(event) {
	const currentClass = valueTurn.classList
	const cellValue = event.target
	if (valueTurn.classList.contains('x') && cellValue.classList.contains('x') === false && cellValue.classList.contains('o') === false) {
		cellValue.classList.add('x')
		valueTurn.classList = 'o'
		board.classList.remove('x-hover')
		board.classList.add('o-hover')
	} else if(valueTurn.classList.contains('o') && cellValue.classList.contains('x') === false && cellValue.classList.contains('o') === false) {
		cellValue.classList.add('o')
		valueTurn.classList = 'x'
		board.classList.remove('o-hover')
		board.classList.add('x-hover')
	}

	if(valueTurn.classList.contains('o')) {
		turnBackground.style.left = '147px'
		turnXText.style.color = 'white'
		turnOText.style.color = 'black'

	} else if(valueTurn.classList.contains('x')) {
		turnBackground.style.left = '0'
		turnXText.style.color = 'black'
		turnOText.style.color = 'white'

	}


	if(checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	}


	cell1.classList.remove('isActive')
	cell2.classList.remove('isActive')
	cell3.classList.remove('isActive')
	cell4.classList.remove('isActive')
	cell5.classList.remove('isActive')
	cell6.classList.remove('isActive')
	cell7.classList.remove('isActive')
	cell8.classList.remove('isActive')
	cell9.classList.remove('isActive')
}


function checkWin(currentClass) {
	return winCombinations.some(combination => {
		return combination.every(index => {
			if(valueTurn.classList.contains('x')) {
				return cellElements[index].classList.contains('o')
			} else if (valueTurn.classList.contains('o')) {
				return cellElements[index].classList.contains('x')
			}
		})
	})
}


function endGame(draw) {
	if (draw) {
		winMessageText.innerText = "Draw!"
		restartButton.addEventListener('click', restartClick)
		winMessage.style.display = 'flex'

	} else if(valueTurn.classList.contains('o')) {
		winMessageText.innerText = "X's wins!"
	} else if (valueTurn.classList.contains('x')) {
		winMessageText.innerText = "O's wins!"
	}

	
	restartButton.addEventListener('click', restartClick)
	restartButtonEvents()
	winMessage.style.display = 'flex'
	if (cell1.classList.contains('isActive') || cell2.classList.contains('isActive') ||
		cell3.classList.contains('isActive') || cell4.classList.contains('isActive') || cell5.classList.contains('isActive') ||
		cell6.classList.contains('isActive') || cell7.classList.contains('isActive') || cell8.classList.contains('isActive') ||
		cell9.classList.contains('isActive')) {

		restartButton.classList.add('isActiveRestartButton')
	}
	

}

function restartClick() {
	winMessage.style.display = 'none'
	startHidden.style.display = 'flex'
	boardAndTurn.style.display = 'none'
	turnBackground.style.left = '0'
	turnXText.style.color = 'white'
	turnOText.style.color = 'white'
	valueTurn.classList.remove('x')
	valueTurn.classList.remove('o')
	board.classList.remove('x-hover')
	board.classList.remove('o-hover')
	cellElements.forEach(cell => {
	cell.classList.remove('x')
	cell.classList.remove('o')
	cell.classList.remove('isActive')
})
	buttonO.classList.remove('bottonActive')
	buttonX.classList.remove('bottonActive')
	restartButton.classList.remove('isActiveRestartButton')
	document.querySelector('.pressCtrlText').innerText = 'Press ctrl to choose with keyboard'	
	restartButtonActiveAgain()

}


function restartButtonEvents() {
	window.onkeydown = (e) => {
		if(e.keyCode === 17 && restartButton.classList.contains('isActiveRestartButton')) {
			restartButton.classList.remove('isActiveRestartButton')
		} else if(e.keyCode === 17 && restartButton.classList.contains('isActiveRestartButton') == false) {
			restartButton.classList.add('isActiveRestartButton')
		} else if (e.keyCode === 13 && restartButton.classList.contains('isActiveRestartButton')) {

			restartClick()
		}
	}
}




function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains('x') || cell.classList.contains('o')
	})
}

