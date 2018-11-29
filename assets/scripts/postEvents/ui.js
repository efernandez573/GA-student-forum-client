const showPostsTemplate = require('./templates/post-listing.handlebars')

const getPostSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({posts: data.posts})
  $('.content').html(showPostsHtml)
}

const createPostSuccess = data => {
  $('#message').html('Signed up successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').addClass('hidden')
  $('#change-password-form').hide()
}

const deletePostSuccess = data => {
  $('#message').html('Welcome Back!')
  $('#message').addClass('success')
  $('#message').removeClass('failure')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#sign-out-button').show()
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
}

const updatePostSuccess = data => {
  $('#message').html('Signed Out successfully')
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
}
module.exports = {
  getPostSuccess,
  createPostSuccess,
  updatePostSuccess,
  deletePostSuccess
}
