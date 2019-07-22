const events = require('./events')

const cp = events.currentPlayer
const b = events.board

const winChecks = (b[0] === b[1] && b[1] === b[2] && b[0] === cp) ||
    (b[3] === b[4] && b[4] === b[5] && b[3] === cp) ||
    (b[6] === b[7] && b[7] === b[8] && b[6] === cp) ||
    (b[0] === b[3] && b[3] === b[6] && b[0] === cp) ||
    (b[1] === b[4] && b[4] === b[7] && b[1] === cp) ||
    (b[2] === b[5] && b[5] === b[8] && b[2] === cp) ||
    (b[0] === b[4] && b[4] === b[8] && b[0] === cp) ||
    (b[2] === b[4] && b[4] === b[6] && b[2] === cp)

module.exports = {
  winChecks
}