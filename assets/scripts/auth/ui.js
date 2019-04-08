const store = require('./../store')

const signUpSuccess = function (data) {
  $('#message-box3').text('Sign up successful!')
  $('#sign-up').hide(600)
  $('#message-box3').hide(1000)
}

const signUpFailure = function (data) {
  $('#message-box3').text('Something went wrong, try again.')
}

const signInSuccess = function (data) {
  $('#message-box4').text('Sign in successful!')
  store.user = data.user
  $('.hide').show()
  $('#sign-in').hide(600)
  $('#sign-up').hide(600)
  $('#message-box4').show()
  $('#message-box3').hide(1000)
  $('#message-box4').hide(2200)
  $('#change-password').removeClass('hide')
}

const signInFailure = function (data) {
  $('#message-box4').text('Something went wrong, try again.')
}

const changePasswordSuccess = function () {
  $('#message-box5').text('Password change successful!')
  $('#change-password').hide(600)
  $('#message-box3').hide(600)
  $('#message-box4').hide(600)
  $('#message-box5').hide(2200)
  $('#message-box5').show()
}

const changePasswordFailure = function () {
  $('#message-box5').text('Something went wrong, try again.')
}

const signOutSuccess = function (data) {
  $('form').trigger('reset')
  $('#sign-up').show(600)
  $('#sign-in').show(600)
  $('.hide').hide()
  $('#message-box2').hide()
  $('.gamearea').hide()
  store.user = null
}

const signOutFailure = function () {
  $('#message-box5').text('Something went wrong, try again.')
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
