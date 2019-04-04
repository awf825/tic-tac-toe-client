const ui = require('./ui.js')
// const api = require(./api.js)
// const getFormFields = require(../../lib/get-form-fields.js)
let currentPlayer = 'X'
const turn = function () {
  if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else currentPlayer = 'O'
}

const board = ['', '', '', '', '', '', '', '', '']
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
    alert(`${currentPlayer} wins!`)
  } else if (board.every(index => index !== '')) {
    gameOver = true
    alert('draw!')
  }
}

const onClick = function (event) {
  const currentBox = $(event.target).data('id')
  const content = $(event.target).text()
  if (content === '' && currentPlayer === 'X') {
    $(event.target).text(currentPlayer)
    board[currentBox] = currentPlayer
    checkForWin(board, currentPlayer)
    turn()
  } else if (content === '' && currentPlayer === 'O') {
    $(event.target).text(currentPlayer)
    board[currentBox] = currentPlayer
    checkForWin(board, currentPlayer)
    turn()
  }
  console.log(board)
}

const addEventHandler = function () {
  $('.square').on('click', onClick)
}
module.exports = {
  onClick,
  addEventHandler

}
