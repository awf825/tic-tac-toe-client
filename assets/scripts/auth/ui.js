const store = require('./../store')

const signUpSuccess = function (data) {
  $('#message-box3').text('Sign up successful!')
  $('#sign-up').hide(1200)
  $('#message-box3').hide(1200)
  $('#message-box3').show()
}

const signUpFailure = function (data) {
  $('#message-box3').text('Something went wrong, try again.')
}

const signInSuccess = function (data) {
  $('#message-box4').text('Sign in successful!')
  store.user = data.user
  $('.hide').show()
  $('#sign-in').hide(1200)
  $('#sign-up').hide(1200)
  $('#message-box3').hide(1200)
  $('#message-box4').hide(1200)
  $('#change-password').removeClass('hide')
}

const signInFailure = function (data) {
  $('#message-box4').text('Something went wrong, try again.')
}

const changePasswordSuccess = function () {
  $('#message-box5').text('Password change successful!')
  $('#change-password').hide(1200)
  $('#message-box3').hide(1200)
  $('#message-box4').hide(1200)
  $('#message-box5').hide(1200)
  $('#message-box5').show()
}

const changePasswordFailure = function () {
  $('#message-box5').text('Something went wrong, try again.')
}

const signOutSuccess = function (data) {
  $('#sign-up').show(1200)
  $('#sign-in').show(1200)
  $('#message-box').hide(1200)
  $('#message-box2').hide(1200)
  $('.hide').hide()
  $('.gamearea').hide()
  $('form').trigger('reset')
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
