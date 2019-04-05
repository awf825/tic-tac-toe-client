const store = require('./store.js')

const createGameSuccess = function (data) {
  store.game = data.game
  console.log('create game success', data)
}

const createGameFailure = function () {
  console.log('create game failed')
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
