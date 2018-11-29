const config = require('./config.js')
// const store = require('../store.js')

const getPost = function () {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}
const deletePost = function (data) {
  return $.ajax({

    url: config.apiUrl + '/posts/' + id,
    method: 'DELETE'
  })
}
const createPost = function () {
  return $.ajax({
    url: config.apiUrl + '/posts/',
    method: 'POST'

  })
}
const updatePost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts/' + id,
    method: 'PATCH'
  })
}

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost
}
