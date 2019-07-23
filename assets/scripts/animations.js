const gameOver = () => {
  $('.gamearea').hide()
  $('#message-box').hide()
}

const newGame = () => {
  $('.gamearea').show(1000)
  $('.square').text('')
  $('#message-box-endgame').text('')
}

module.exports = {
  gameOver, newGame
}
