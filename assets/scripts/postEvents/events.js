const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onGetPosts = () => {
  api.getPosts()
    .then((res) => {
      ui.getPostsSuccess(res)
    })
}

module.exports = {
  onGetPosts,
  getFormFields
}
