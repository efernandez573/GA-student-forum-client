const config = require('./config.js')

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
      Authorization: 'Token token='
    }
  })
}
// Post specific api calls
const getPosts = function () {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET'
  })
}
module.exports = {
  getPosts,
  signIn,
  signOut,
  signUp
}
