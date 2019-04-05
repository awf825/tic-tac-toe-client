const events = require('./events')
const auth = require('./auth/events')
const gamefiles = require('./gamefiles.js')

$(() => {
  events.addEventHandler()
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#create').on('submit', gamefiles.onCreateGame)
})
