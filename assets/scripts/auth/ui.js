'use strict'
const store = require('../store')
const signUpSuccess = function () {
  $('#authmessage').html('Successfully signed up')
  $('#authmessage').css('background-color', 'green')
}
const signInSuccess = function (data) {
  $('#authmessage').html('Successfully signed in')
  $('#authmessage').css('background-color', 'green')
  $('#authmessage').css('color', 'white')
  $('#authmessage').css('text-align', 'center')
  console.log(data)
  store.user = data.user
}

const signUpFailure = function () {
  $('#authmessage').html('Failure signing up')
  $('#authmessage').css('background-color', 'red')
}
const signInFailure = function () {
  $('#authmessage').html('Failure signing in')
  $('#authmessage').css('background-color', 'red')
}
const changePasswordSuccess = function () {
  $('#authmessage').html('Successfully changed password')
  $('#authmessage').css('background-color', 'green')
}
const changePasswordFailure = function () {
  $('#authmessage').html('Failure changing password')
  $('#authmessage').css('background-color', 'red')
}
const signOutSuccess = function () {
  $('#authmessage').html('Successfully signed out')
  $('#authmessage').css('background-color', 'green')
  store.user = null
}
const signOutFailure = function () {
  $('#authmessage').html('Failure signing out')
  $('#authmessage').css('background-color', 'red')
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
