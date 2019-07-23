const store = require('./../store')
const animations = require('./../animations')
const messages = require('./../messages')

const signUpSuccess = function (data) {
  animations.showDisplay()
  messages.signUpSuccess()
}

const signUpFailure = function (data) {
  messages.signUpFailure()
}

const signInSuccess = function (data) {
  animations.showDisplay()
  messages.signInSuccess()
  store.user = data.user
  animations.showGameOptions()
}

const signInFailure = function (data) {
  messages.signInFailure()
}

const changePasswordSuccess = function () {
  animations.showDisplay()
  messages.changePasswordSuccess()
}

const changePasswordFailure = function () {
  messages.changePasswordFailure()
}

const signOutSuccess = function (data) {
  animations.signOutSuccess()
  store.user = null
}

const signOutFailure = function () {
  messages.signOutFailure()
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
