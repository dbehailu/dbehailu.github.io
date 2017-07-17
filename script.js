function comments() {
  var comment = $('#comment-content').val();
  $("#result").append( "<ul><li>" + comment + "</li></ul>" );
}

function setup() {
  $("#submit_button").click(comments);
}

$(document).ready(setup)
