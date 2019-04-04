const ui = require('./ui.js')
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
  const content = $(event.target).text()
  if (content === '' && currentPlayer === 'X') {
    $(event.target).text(currentPlayer)
    board[currentBox] = currentPlayer
    turn()
  } else if (content === '' && currentPlayer === 'O') {
    $(event.target).text(currentPlayer)
    board[currentBox] = currentPlayer
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
