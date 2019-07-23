const promptTurn = (cp) => $('#message-box').text(`${cp}, it's your turn!`)
const win = (cp) => $('#message-box-endgame').text(`${cp} wins!`)
const tie = () => $('#message-box-endgame').text('Draw!')
const spaceTaken = () => $('#message-box').text('Space taken.')
const showMyGames = (gp) => {
  $('#message-box').text(`You have played ${gp} games.`)
  $('#message-box').hide(3000)
}

const goodbye = () => {
  setTimeout(function () {
    $('#message-box').text('')
  }, 2000)
}

const signUpSuccess = () => {
  $('#message-box').text('Sign up successful!')
  $('#message-box-endgame').text('')
  goodbye()
  $('#sign-up').hide(1600)
}

const signUpFailure = () => {
  $('#message-box').text('Something went wrong, try again.')
  goodbye()
  $('#sign-up').trigger('reset')
}

const signInSuccess = () => {
  $('#message-box').text('Sign in successful!')
  $('#message-box-endgame').text('')
  goodbye()
}

const signInFailure = () => {
  $('#message-box').text('Something went wrong, try again.')
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = () => {
  $('#message-box').text('Password change successful!')
  $('#message-box-endgame').text('')
  goodbye()
  $('#change-password').trigger('reset')
}

const changePasswordFailure = () => {
  $('#message-box').text('Something went wrong, try again.')
  goodbye()
  $('#change-password').trigger('reset')
}

const signOutFailure = () => $('#message-box').text('Something went wrong, try again.')

module.exports = {
  promptTurn,
  win,
  tie,
  spaceTaken,
  showMyGames,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure
}
