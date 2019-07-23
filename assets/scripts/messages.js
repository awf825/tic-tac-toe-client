const promptTurn = (cp) => $('#message-box').text(`${cp}, it's your turn!`)
const win = (cp) => $('#message-box-endgame').text(`${cp} wins!`)
const tie = () => $('#message-box-endgame').text('Draw!')
const spaceTaken = () => $('#message-box').text('Space taken.')

module.exports = {
  promptTurn, win, tie, spaceTaken
}
