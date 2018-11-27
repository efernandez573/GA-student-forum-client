const postEvents = require('./events.js')

$('#button').on('submit', postEvents.onGetPosts())
