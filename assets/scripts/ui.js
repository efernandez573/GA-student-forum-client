const showPostsTemplate = require('./templates/post-listing.handlebars')

const getPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({posts: data.posts})
  $('.content').html(showPostsHtml)
}
module.exports = {
  getPostsSuccess
}
