const config = require('./config.js')
const store = require('./store.js')

const getPosts = function () {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}
module.exports = {
  getPosts
}
