const config = require('./config.js')
const store = require('./store.js')

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: '{}'
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: value
        },
        over: over
      }
    }
  })
}

const findGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  findGame
}
