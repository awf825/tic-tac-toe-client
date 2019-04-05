const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../lib/get-form-fields')

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createGame(data)
    .then(ui.createGameSuccess)
}

module.exports = {
  onCreateGame
}
