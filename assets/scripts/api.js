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

/*const updateGame = function (data) {
  return $.ajax({
    url: config.apiUrl + `game/${id}`,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'x'
        },
        'over': false
      }
    }
  })
}*/

module.exports = {
  createGame
}
