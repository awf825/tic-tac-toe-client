// const ui = require(./ui.js)
// const api = require(./api.js)
// const getFormFields = require(../../lib/get-form-fields.js)

const test = function (event) {
  event.preventDefault()

  console.log('a square was clicked', event)
}

module.exports = {
  test
}
