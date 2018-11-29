const postEvents = require('./events.js')

$('#button').on('submit', postEvents.onGetPosts())
$(() => {
  $('#create-post-form').on('submit', postEvents.onCreatePost)
  $('#update-post-form').on('submit', postEvents.onUpdatePost)
  $('#delete-post-form').on('submit', postEvents.onDeletePost)
  $('#get-post-form').on('submit', postEvents.onGetPost)
})
