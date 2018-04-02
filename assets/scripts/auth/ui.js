'use strict'
const store = require('../store')
const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}
const signInSuccess = function (data) {
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  $('#message').css('text-align', 'center')
  console.log(data)
  store.user = data.user
}

const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
}
const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
}
const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
}
const changePasswordFailure = function () {
  $('#message').text('Failure changing password')
  $('#message').css('background-color', 'red')
}
const signOutSuccess = function () {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Failure signing out')
  $('#message').css('background-color', 'red')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}
