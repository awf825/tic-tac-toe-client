const api = require('./api')
const v = require('./variable')

let board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'O'
let gameOver = false

const turn = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else currentPlayer = 'X'
  $('#message-box').text(`${currentPlayer}, it's your turn!`)
}

const checkForWin = function () {
  if (v.winChecks(board, currentPlayer)) {
    gameOver = true
    $('#message-box-endgame').text(`${currentPlayer} wins!`)
  } else if (board.every(i => i !== '')) {
    gameOver = true
    $('#message-box-endgame').text('Draw!')
  }
}

const endGame = function () {
  if (gameOver === true) {
    $('.gamearea').hide()
    $('#message-box').hide()
    currentPlayer = 'X'
  }
}

const onNewGame = function () {
  $('.gamearea').show(1000)
  $('.square').text('')
  $('#message-box-endgame').text('')
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
    $('#message-box').text('Space taken.')
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
