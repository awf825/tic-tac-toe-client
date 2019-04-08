const store = require('./store.js')

const createGameSuccess = function (data) {
  store.game = data.game
  $('.display').show()
}

const updateGameSuccess = function (data) {
}

const updateGameFailure = function () {
}

const findGameSuccess = function (response) {
  const gamesPlayed = response.games.length
  $('.display').show()
  $('#message-box').text(`You have played ${gamesPlayed} games.`)
  $('#message-box').hide(3000)
  $('.display').show()
}
module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  findGameSuccess
}
