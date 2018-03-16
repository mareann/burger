// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    console.log("js/burgers.js: .devour-burger")
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: true
    };
    
    var newText = $(this).burger_name; 
    $(".devouredBurger").text += newText;
console.log("=============.devour text"+newText+" "+$(".devouredBurger").text)
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
  console.log("js/burgers.js: .ajax /api/burgers "+id+" devoured changed to", newDevourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
console.log("-----------js/burgers.js: .create-form")

    if ( $("#ca").val().trim() == "" )
    {
      //alert("no value entered");
      return;
    }

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("-------------js/burgers.js: .ajax /api/burgers created newBurger "+newBurger.name);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
/*
  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
         console.log("js/cat.js: .delete-cat .ajax /api/cats deleted cat "+id);

        //console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });*/
});
