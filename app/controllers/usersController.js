function usersController(event){

  event.preventDefault()
	const username = $('#username').val()
	document.getElementById('query').reset()
	$.ajax({
        url: `https://api.github.com/users/${username}/repos`,
        type: 'get'
    })
    .done(function (response) {
      var user = new User(username, location)

        displayRepositories(response)
    })
