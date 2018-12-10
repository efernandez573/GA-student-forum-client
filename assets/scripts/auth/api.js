const config = require('../config.js')
const store = require('../store.js')

const signUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
const signOut = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getAllPosts = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const createPost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePost = function (data) {
  const id = data.post.id
  // delete data.post.id
  return $.ajax({
    url: config.apiUrl + '/posts/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updatePost = function (data) {
  const id = data.post.id
  // delete data.post.id
  return $.ajax({
    url: config.apiUrl + '/posts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  changePassword,
  signIn,
  signOut,
  signUp,
  createPost,
  getAllPosts,
  updatePost,
  deletePost
}
