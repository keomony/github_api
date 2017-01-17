$(document).ready(function() {
  $(document).on('keypress', '#username', function() {
    if (event.which === 13) { //check the key was <enter>
      var input = $(this);
      var username = input.val();
      getGithubInfo(username);
    }
  });
});

function getGithubInfo(username) {
  var url= 'https://api.github.com/users/' +username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  return xmlhttp;
}

function showUser(xmlhttp){
  if(xmlhttp.status ===200) {
    //show the user details
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);
  } else {
    //show an error
  }
}
