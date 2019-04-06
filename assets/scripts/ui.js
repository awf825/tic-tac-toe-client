const store = require('./store.js')

const createGameSuccess = function (data) {
  store.game = data.game
}

const updateGameSuccess = function (data) {
  console.log('update game success', data)
}

const updateGameFailure = function () {
  console.log('update game failure')
}
module.exports = {
  createGameSuccess,
  updateGameSuccess,
  updateGameFailure
}
