const store = require('./../store')

const signUpSuccess = function (data) {
  $('.display').show()
  $('#message-box').text('Sign up successful!')
  $('#message-box-endgame').text('')
  $('#sign-up').hide(1600)
  $('#message-box').hide(1600)
}

const signUpFailure = function (data) {
  $('#message-box').text('Something went wrong, try again.')
}

const signInSuccess = function (data) {
  $('.display').show()
  $('#message-box').text('Sign in successful!')
  $('#message-box-endgame').text('')
  store.user = data.user
  $('.hide').show()
  $('#sign-in').hide(1600)
  $('#sign-up').hide(1600)
  $('#message-box').hide(1600)
}

const signInFailure = function (data) {
  $('#message-box').text('Something went wrong, try again.')
}

const changePasswordSuccess = function () {
  $('.display').show()
  $('#message-box').text('Password change successful!')
  $('#message-box-endgame').text('')
  $('#message-box').hide(1600)
}

const changePasswordFailure = function () {
  $('#message-box').text('Something went wrong, try again.')
}

const signOutSuccess = function (data) {
  $('#sign-up').show(1200)
  $('#sign-in').show(1200)
  $('#message-box-endgame').hide(1200)
  $('.hide').hide()
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  $('#message-box').text('Something went wrong, try again.')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
