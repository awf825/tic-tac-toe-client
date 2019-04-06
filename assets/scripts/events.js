const api = require('./api')

let currentPlayer = 'X'
const turn = function () {
  if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else currentPlayer = 'O'
  $('#message-box').text(`${currentPlayer}, it's your turn!`)
}

let board = ['', '', '', '', '', '', '', '', '']
let gameOver = false
const checkForWin = function () {
  if (
    (board[0] === board[1] && board[1] === board[2] && board[0] === currentPlayer) ||
    (board[3] === board[4] && board[4] === board[5] && board[3] === currentPlayer) ||
    (board[6] === board[7] && board[7] === board[8] && board[6] === currentPlayer) ||
    (board[0] === board[3] && board[3] === board[6] && board[0] === currentPlayer) ||
    (board[1] === board[4] && board[4] === board[7] && board[1] === currentPlayer) ||
    (board[2] === board[5] && board[5] === board[8] && board[2] === currentPlayer) ||
    (board[0] === board[4] && board[4] === board[8] && board[0] === currentPlayer) ||
    (board[2] === board[4] && board[4] === board[6] && board[2] === currentPlayer)) {
    gameOver = true
    $('#message-box2').text(`${currentPlayer} wins!`)
  } else if (board.every(index => index !== '')) {
    gameOver = true
    $('#message-box2').text('Draw!')
  }
}

const endGame = function () {
  if (gameOver === true) {
    $('.container').hide()
    $('#message-box').hide(1000)
  }
}

const onNewGame = function () {
  $('.square').text('')
  $('#message-box2').text('')
  gameOver = false
  board = ['', '', '', '', '', '', '', '', '']
  $('.container').show(1000)
  turn()
  $('#message-box').show('')
}

const onClick = function (event) {
  const currentBox = $(event.target).data('id')
  const emptyBox = $(event.target).text()
  if (emptyBox === '' && currentPlayer === 'X') {
    $(event.target).text(currentPlayer)
    board[currentBox] = currentPlayer
    checkForWin(currentBox, currentPlayer, gameOver)
    api.updateGame(currentBox, currentPlayer, gameOver)
    endGame()
    turn()
  } else if (emptyBox === '' && currentPlayer === 'O') {
    $(event.target).text(currentPlayer)
    board[currentBox] = currentPlayer
    checkForWin(board, currentPlayer)
    api.updateGame(currentBox, currentPlayer, gameOver)
    endGame()
    turn()
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
