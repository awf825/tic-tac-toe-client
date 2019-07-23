const api = require('./api')
const v = require('./variable')
const animations = require('./animations')
const messages = require('./messages')

let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'O'
let gameOver = false

const turn = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else (currentPlayer = 'X')
  messages.promptTurn(currentPlayer)
}

const checkForWin = function () {
  if (v.winChecks(board, currentPlayer)) {
    gameOver = true
    messages.win(currentPlayer)
  } else if (board.every(i => i !== '')) {
    gameOver = true
    messages.tie()
  }
}

const endGame = function () {
  if (gameOver === true) {
    animations.gameOver()
    currentPlayer = 'X'
  }
}

const onNewGame = function () {
  animations.newGame()
  gameOver = false
  board = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'O'
  turn()
}

const gameFlow = (cb) => {
  $(event.target).text(currentPlayer)
  board[cb] = currentPlayer
  checkForWin(board, currentPlayer)
  api.updateGame(cb, currentPlayer, gameOver)
  endGame()
  turn()
}

const onClick = function (event) {
  const currentBox = $(event.target).data('id')
  const emptyBox = $(event.target).text()
  if (emptyBox === '' && currentPlayer === 'X') {
    gameFlow(currentBox)
  } else if (emptyBox === '' && currentPlayer === 'O') {
    gameFlow(currentBox)
  } else if (emptyBox !== '') {
    messages.spaceTaken()
  }
}

const addEventHandler = function () {
  $('.square').on('click', onClick)
  $('#create').on('click', onNewGame)
}

module.exports = {
  onClick,
  addEventHandler
}
