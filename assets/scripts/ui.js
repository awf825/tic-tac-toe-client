const store = require('./store.js')
const animations = require('./animations')
const messages = require('./messages')

const createGameSuccess = function (data) {
  store.game = data.game
  animations.showDisplay()
}

const findGameSuccess = function (response) {
  const gamesPlayed = response.games.length
  animations.showDisplay()
  messages.showMyGames(gamesPlayed)
}

module.exports = {
  createGameSuccess,
  findGameSuccess
}
