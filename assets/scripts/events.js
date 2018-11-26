const api = require('./api.js')
const ui = require('./ui.js')

const onGetPosts = () => {
  api.getPosts()
    .then((res) => {
      ui.getPostsSuccess(res)
    })
}

module.exports = {
  onGetPosts
}
