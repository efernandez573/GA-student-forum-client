'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./events.js')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#create-post-form').on('submit', authEvents.onCreatePost)
  $('#update-post-form').on('submit', authEvents.onUpdatePost)
  $('#delete-post-form').on('submit', authEvents.onDeletePost)
  $('#get-post-form').on('submit', authEvents.onGetAllPost)
})
