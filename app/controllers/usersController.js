var usersController = (function() {

  function setup(event) {
    event.preventDefault()
  }

  function getOwner() {
    let user = $('#username').val()
    usersAdapter(user)
  }

  function getRepos() {
    let user = $('#username').val()
    $('#query')[0].reset()
    return repoArr = reposAdapter(user)
  }
  
  return {
    getOwner, 
    getRepos, 
    setup
  }

}())
