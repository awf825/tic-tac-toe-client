const gameOver = () => {
  $('.gamearea').hide()
  $('#message-box').hide()
}

const newGame = () => {
  $('.gamearea').show(1000)
  $('.square').text('')
  $('#message-box-endgame').text('')
}

const showGameOptions = () => {
  $('.hide').show()
  $('#sign-in').hide(1600)
  $('#sign-up').hide(1600)
}

const signOutSuccess = () => {
  $('#sign-up').show(1200)
  $('#sign-in').show(1200)
  $('#message-box-endgame').hide(1200)
  setTimeout(function () {
    $('#message-box').text('')
  }, 500)
  $('.hide').hide()
  $('form').trigger('reset')
}

const showDisplay = () => $('.display').show()

module.exports = {
  gameOver, newGame, showDisplay, showGameOptions, signOutSuccess
}
