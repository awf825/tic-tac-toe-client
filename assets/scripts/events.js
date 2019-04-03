// const ui = require(./ui.js)
// const api = require(./api.js)
// const getFormFields = require(../../lib/get-form-fields.js)
const board = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
const turn = function () {
  if (currentPlayer === 'O') {
    currentPlayer = 'X'
  } else currentPlayer = 'O'
}

const onClick = function (event) {
  const currentBox = $(event.target).data('id')
  $(event.target).text(currentPlayer)
  board[currentBox] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const addEventHandler = function () {
  $('.square').on('click', onClick)
}
/* const onClick1 = function (event) {
  $(event.target).text(currentPlayer)
  board[1] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const onClick2 = function (event) {
  $(event.target).text(currentPlayer)
  board[2] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const onClick3 = function (event) {
  $(event.target).text(currentPlayer)
  board[3] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const onClick4 = function (event) {
  $(event.target).text(currentPlayer)
  board[4] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const onClick5 = function (event) {
  $(event.target).text(currentPlayer)
  board[5] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const onClick6 = function (event) {
  $(event.target).text(currentPlayer)
  board[6] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const onClick7 = function (event) {
  $(event.target).text(currentPlayer)
  board[7] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}

const onClick8 = function (event) {
  $(event.target).text(currentPlayer)
  board[8] = currentPlayer
  turn()
  console.log(board)
  console.log(currentPlayer)
}*/
module.exports = {
  onClick,
  addEventHandler

}
