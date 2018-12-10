const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(data)
    .then(ui.signUpSuccess) // if your request was succesful
    .catch(ui.signUpFailure) // if your request failed
}
const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(data)
    .then(ui.signInSuccess) // if your request was succesful
    .catch(ui.signInFailure) // if your request failed
}
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess) // if your request was succesful
    .catch(ui.signOutFailure) // if your request failed
}
const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(data)
    .then(ui.changePasswordSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

const onGetAllPost = () => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.getAllPosts(data)
    .then(ui.getPostSuccess)
    .catch(ui.failure) // if your request failed
}

const onCreatePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.createPost(data)
    .then(ui.createPostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onUpdatePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.updatePost(data)
    .then(ui.updatePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onDeletePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deletePost(data)
    .then(ui.DeletePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onChangePassword,
  onGetAllPost,
  onCreatePost,
  onUpdatePost,
  onDeletePost,
  getFormFields
}
