const store = require('./../store')

const signUpSuccess = function (data) {
  $('#message-box3').text('Sign up successful!')
  $('#sign-up').hide(600)
}
const signUpFailure = function (data) {
  console.log('sign up failure ran with the data: ', data)
}

const signInSuccess = function (data) {
  $('#message-box4').text('Sign in successful!')
  store.user = data.user
  $('#sign-in').hide(600)
  $('#sign-up').hide(600)
  $('#message-box3').hide(600)
}

const signInFailure = function (data) {
  console.log('sign in failure ran with the data: ', data)
}

const changePasswordSuccess = function () {
  $('#message-box5').text('Password change successful!')
  $('#change-password').hide(600)
  $('#message-box3').hide(600)
  $('#message-box4').hide(600)
}

const changePasswordFailure = function () {
  console.log('change password failure')
}

const signOutSuccess = function () {
  console.log('sign out successful!')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  console.log('sign out failed...')
}

const createGameSuccess = function () {
  console.log('create game success')
}

const createGameFailure = function () {
  console.log('create game failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
}
