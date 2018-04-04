const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')

const player1 = 'X'
const player2 = 'O'
const board = ['', '', '', '', '', '', '', '', '']
let turn = ''
const newGame = function () {
  for (let i = 0; i < board.length; i++) {
    board[i].innerHTML = []
  }
}
const setArray = function () {
  board[0] = $('#box-0').text()
  board[1] = $('#box-1').text()
  board[2] = $('#box-2').text()
  board[3] = $('#box-3').text()
  board[4] = $('#box-4').text()
  board[5] = $('#box-5').text()
  board[6] = $('#box-6').text()
  board[7] = $('#box-7').text()
  board[8] = $('#box-8').text()
  console.log(board)
}
const winCondition = function () {
  board[0] = $('#box-0').text()
  board[1] = $('#box-1').text()
  board[2] = $('#box-2').text()
  board[3] = $('#box-3').text()
  board[4] = $('#box-4').text()
  board[5] = $('#box-5').text()
  board[6] = $('#box-6').text()
  board[7] = $('#box-7').text()
  board[8] = $('#box-8').text()

  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    console.log('You Have Won!')
  } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
    console.log('You Have Won!')
  } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
    console.log('You Have Won!')
  } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
    console.log('You Have Won!')
  } else if (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) {
    console.log('You Have Won!')
  } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    console.log('You Have Won!')
  } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    console.log('You Have Won!')
  } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    console.log('You Have Won!')
  }
}
const turnSwitch = function (e) {
  if (e.target.innerHTML !== 'X' && e.target.innerHTML !== 'O') {
    if (turn === player1) {
      turn = player2
    } else {
      turn = player1
    }
    e.target.innerHTML = turn
    console.log(turn)
  } else {
    console.log('Not a valid space')
  }
  return turn
}

const addHandlers = function () {
  $('#restart').on('click', newGame)
  $('.box').on('click', function (event) {
    event.preventDefault()
    turnSwitch(event)
    setArray()
    winCondition()
  })
}

module.exports = {
  addHandlers,
  player1,
  player2,
  board,
  setArray,
  newGame,
  winCondition
}
