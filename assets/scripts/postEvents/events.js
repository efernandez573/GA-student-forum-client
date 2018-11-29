const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onGetPost = () => {
  api.getPosts()
    .then((res) => {
      ui.getPostsSuccess(res)
        .catch(ui.failure) // if your request failed
    })
}
const onCreatePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signUp(data)
    .then(ui.createPostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onUpdatePost = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(data)
    .then(ui.updatePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}
const onDeletePost = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.DeletePostSuccess) // if your request was succesful
    .catch(ui.failure) // if your request failed
}

module.exports = {
  onGetPost,
  onCreatePost,
  onUpdatePost,
  onDeletePost,
  getFormFields
}
