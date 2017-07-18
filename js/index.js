$(document).ready(function() {
  $("#button-search").on("click", function() {
    //empties contents of div holding previous results
    $("#results-list").empty();
    
    if ($("#search-input").val() === "") {
      alert("Empty");
    } else {
      var input = $("#search-input").val();  
      getResults(input);
    }
    $("#search-input").val("");
    return false;
  });
  
  $('#button-random').on('click', function(){
      
  });
});

function getResults(input) {
  $.getJSON(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=10&generator=search&origin=*&prop=info&inprop=url&gsrsearch=" +
      input,
    function(data) {
      for (var index in data.query.pages) {
        //console.log(data.query.pages[index]['fullurl']);

        $("#results-list").append(
          '<p><a href="' +
            data.query.pages[index]["fullurl"] +
            '" target="_blank">' +
            data.query.pages[index]["title"] +
            "</a></p>"
        );
      }
    }
  ); //end of Ajax request
}