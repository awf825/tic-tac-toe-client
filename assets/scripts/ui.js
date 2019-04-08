const store = require('./store.js')

const createGameSuccess = function (data) {
  store.game = data.game
}

const updateGameSuccess = function (data) {
}

const updateGameFailure = function () {
}

const findGameSuccess = function (response) {
  const gamesPlayed = response.games.length
  $('#message-box6').text(`You have played ${gamesPlayed} games.`)
  $('#message-box6').hide(5000)
  $('#message-box6').show()
}
module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure,
  findGameSuccess
}
